package com.acorn.melody2.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "comment") // comments 테이블에 매핑
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserAccount_ID") // 댓글 ID (기본키)
    private Long userAccountId;


    @Column(name = "Post_ID") // 게시물 ID
    private Long postId;

    @Column(name = "Comment_Content") // 댓글 내용
    private String commentContent;

    @Column(name = "Reply_Status") // 답변여부
    private boolean replyStatus;

    // 생성자, 게터, 세터, equals, hashCode, toString 등의 메서드는 Lombok의 @Data 어노테이션에 의해 자동 생성됨
}
