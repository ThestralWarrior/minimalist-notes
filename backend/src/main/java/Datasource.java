import java.sql.*;

public class Datasource {
    private final String CONNECTION_STRING = "jdbc:sqlite:C:\\Users\\Ashirvad\\OneDrive\\Desktop\\minimalist-notes\\minimalist-notes\\backend\\minimalist.db";
    private Connection connection;

    public void openConnection() {
        try {
            connection = DriverManager.getConnection(CONNECTION_STRING);
            System.out.println("Connection has been opened.");
            System.out.println(connection.getMetaData());
        } catch (SQLException e) {
            System.out.println("Error while connecting to database.");
        }
    }

    public void createTable() {
        try {
            Statement statement = connection.createStatement();
            statement.execute("CREATE TABLE IF NOT EXISTS notes(name text, _id integer, note text)");
        } catch (SQLException e) {
            System.out.println("Couldn't create table: " + e.getMessage());
        }
    }

    public void insertNote(String name, int _id, String note) {
        try {
            Statement statement = connection.createStatement();
            String INSERT_SQL = String.format("INSERT INTO notes(name, _id, note) VALUES('%s',%d,'%s')", name, _id, note);
            statement.execute(INSERT_SQL);
        } catch(SQLException e) {
            System.out.println("Couldn't insert note: " + e.getMessage());
        }
    }

    public void queryNotes(String name) {
        try {
            Statement statement = connection.createStatement();
            String QUERY_SQL = String.format("SELECT _id, note FROM notes WHERE name = '%s'", name);
            ResultSet results = statement.executeQuery(QUERY_SQL);
            while(results.next()) {
                System.out.printf("Note no. %d: %s\n", results.getInt(1), results.getString(2));
            }
        } catch(SQLException e) {
            System.out.println("Couldn't query name: " + e.getMessage());
        }
    }

    public void closeConnection() {
        try {
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
            System.out.println("Connection has been closed.");
        } catch (SQLException e) {
            System.out.println("Error while closing database.");
        }
    }

    public static void main(String[] args) {
        Datasource ds = new Datasource();
        ds.openConnection();
        ds.createTable();
        ds.insertNote("Ashirvad", 1, "Hi this is my first note.");
        ds.insertNote("Ashirvad", 2, "Yo this is my 2nd time writing a note.");
        ds.queryNotes("Ashirvad");
        ds.closeConnection();
    }
}
