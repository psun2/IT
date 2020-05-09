package user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDAO {
//	�����ͺ��̽��� �����ϰų�, ������ ������ �����͸� �����Ҷ� ���˴ϴ�.

	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;
//	ctrl + shift + o �� �ܺ� ���̺귯���� �߰� �մϴ�.

//	������ ����
	public UserDAO() {
		try {
			String dbURL = "jdbc:mysql://localhost:3306/BBS"; // sql�� Create BBS �� �ּ��Դϴ�.
			String dbID = "root";
			String dbPassword = "root";
			Class.forName("com.mysql.jdbc.Driver"); // mysql�� ������ �� �ֵ��� �����ִ� �ϳ��� ���̺귯�� �Դϴ�.
//			DriverManager �� ctrl + shift + o �� �ܺ� ���̺귯���� �߰� �մϴ�.
			conn = DriverManager.getConnection(dbURL, dbID, dbPassword); // dbURL�� dbID�� �̿��Ͽ� dbPassword�� ������ �� �ְ� �մϴ�.
//			������ �Ǹ� conn��ü �ʿ� ������ ���� �˴ϴ�.
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

//	�α��� �õ��� ���� �Լ�
	public int login(String userID, String userPassword) {
		String SQL = "SELECT userPassword FROM USER WHERE userID = ?";
//		���� ���̺��� �ش������� ��й�ȣ�� ������ �� �ְ� �մϴ�.
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, userID);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				// ����� �����Ҷ� ����
				if (rs.getString(1).equals(userPassword)) {
					// ����� ���������� ��й�ȣ�� �����ϴٸ�
					return 1; // �α��� ����
				} else {
					return 0; // ��й�ȣ ����
				}
			}
			return -1; // ���̵� ���� ���� ���� ��
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -2; // �����ͺ��̽� ����
	}

}
