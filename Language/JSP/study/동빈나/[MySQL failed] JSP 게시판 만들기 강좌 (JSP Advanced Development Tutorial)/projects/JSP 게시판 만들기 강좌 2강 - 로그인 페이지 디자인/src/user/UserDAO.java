package user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDAO {
//	데이터베이스에 접근하거나, 데이터 베스에 데이터를 저장할때 사용됩니다.

	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;
//	ctrl + shift + o 로 외부 라이브러리를 추가 합니다.

//	생성자 생성
	public UserDAO() {
		try {
			String dbURL = "jdbc:mysql://localhost:3306/BBS"; // sql의 Create BBS 의 주소입니다.
			String dbID = "root";
			String dbPassword = "root";
			Class.forName("com.mysql.jdbc.Driver"); // mysql에 접속할 수 있도록 도와주는 하나의 라이브러리 입니다.
//			DriverManager 을 ctrl + shift + o 로 외부 라이브러리를 추가 합니다.
			conn = DriverManager.getConnection(dbURL, dbID, dbPassword); // dbURL에 dbID를 이용하여 dbPassword로 접속할 수 있게 합니다.
//			접속이 되면 conn객체 않에 정보가 담기게 됩니다.
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

//	로그인 시도를 위한 함수
	public int login(String userID, String userPassword) {
		String SQL = "SELECT userPassword FROM USER WHERE userID = ?";
//		유저 테이블에서 해당사용자의 비밀번호를 가져올 수 있게 합니다.
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, userID);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				// 결과가 존재할때 실행
				if (rs.getString(1).equals(userPassword)) {
					// 결과를 가져왔을때 비밀번호가 동일하다면
					return 1; // 로그인 성공
				} else {
					return 0; // 비밀번호 오류
				}
			}
			return -1; // 아이디가 존재 하지 않을 때
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -2; // 데이터베이스 오류
	}

}
