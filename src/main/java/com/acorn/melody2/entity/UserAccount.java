package com.acorn.melody2.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data //자동으로 게터,세터 equals, hashCode, toString 메서드를 구현
@NoArgsConstructor  // 매개변수 없는 기본 생성자를 자동으로 생성
@Entity
@Table(name = "UserAccount")  // 엔터티가 매핑될 데이터베이스 테이블의 이름을 지정합니다. 여기서는 "UserAccount"라는 이름의 데이터베이스 테이블과 매핑
public class UserAccount {
    @Id  //기본키
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserAccount_ID")  //"UserAccount_ID"라는 열 이름을 사용하여 데이터베이스 테이블의 "userAccountId" 필드를 매
    private Long userAccountId;//

    @Column(name = "Account_ID", unique = true)  //"Account_ID" 열에 매핑되는 accountId 필드를 정의하고 있습니다. unique = true는 이 열에 고유 제약 조건을 설정하는 것을 의미합니다. 즉, 모든 accountId 값은 고유해야 합
    private String accountId;

    @Column(name = "PassWord")//"PassWord" 열에 매핑되는 password 필드를 정의
    private String password;


//    @Column(name = "Prefer_Genre_ID")
//    private Long preferGenreId;

//    @ManyToOne
//    @JoinColumn(name = "Prefer_Genre_ID", referencedColumnName = "Genre_ID", insertable = false, updatable = false)
//    private Genre preferGenre;


}
