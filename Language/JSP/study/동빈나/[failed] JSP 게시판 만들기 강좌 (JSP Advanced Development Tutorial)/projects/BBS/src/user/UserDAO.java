package user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDAO {

//	ctrl + shift + o 
//	�옄�룞�쑝濡� import �빐以띾땲�떎.
	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;

//	�깮�꽦�옄 �깮�꽦
	public UserDAO() {
		try {
			String dbURL = "jdbc:mysql://localhost:3306/BBS";
			String dbID = "root";
			String dbPassword = "root";
			Class.forName("com.mysql.idbc.Driver");
			conn = DriverManager.getConnection(dbURL, dbID, dbPassword);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public int login(String userID, String userPassword) {
		String SQL = "SELECT userPassword FROM USER WHERE userId = ?";
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, userID);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				if(rs.getString(1).equals(userPassword)) {
					return 1; // 濡쒓렇�씤 �꽦怨�
				} else {
					return 0; // 鍮꾨�踰덊샇 遺덉씪移�
				}
			}
			return -1; // �븘�씠�뵒媛� �뾾�뒿�땲�떎.
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -2; // �뜲�씠�꽣踰좎씠�뒪 �삤瑜�
	}
}
