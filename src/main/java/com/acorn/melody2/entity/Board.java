package com.acorn.melody2.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data //자동으로 게터,세터 equals, hashCode, toString 메서드를 구현
@NoArgsConstructor  // 매개변수 없는 기본 생성자를 자동으로 생성
@Entity
@Table(name = "board")
public class Board {
    @Id  //기본키
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserAccount_ID")
    private Long userAccountId;//

    @Column(name = "Account_ID", unique = true)
    private String accountId;

    @Column(name = "Title")
    private String title;

    @Column(name = "Content")
    private String content;

    @Column(name = "Creation_Date")
    private Date creationDate;






    // Other album properties and relationships
}
