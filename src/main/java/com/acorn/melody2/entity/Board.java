package com.acorn.melody2.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Board")
@NoArgsConstructor
@Data
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "no")
    private Long boardNo;

    @Column(name = "title")
    private String boardTitle;

    @Column(name = "content")
    private String boardContent;




    // Other album properties and relationships
}
