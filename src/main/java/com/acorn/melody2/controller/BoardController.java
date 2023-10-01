package com.acorn.melody2.controller;

import com.acorn.melody2.entity.Board;
import com.acorn.melody2.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users-boards")
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping
    public ResponseEntity<List<Board>> getAllBoards() {
        List<Board> boards = boardService.getAllBoards();
        return ResponseEntity.ok(boards);
    }

    @GetMapping("/{no}")
    public ResponseEntity<Board> getBoardByNo(@PathVariable Long no) {
        Optional<Board> board = boardService.getBoardByNo(no);
        return board.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Board> createBoard(@RequestBody Board board) {
        Board createdBoard = boardService.createBoard(board);
        return new ResponseEntity<>(createdBoard, HttpStatus.CREATED);
    }

    @PutMapping("/{no}")
    public ResponseEntity<Board> updateBoard(@PathVariable Long no, @RequestBody Board updatedBoard) {
        Board updated = boardService.updateBoard(no, updatedBoard);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{no}")
    public ResponseEntity<Void> deleteBoard(@PathVariable Long no) {
        boardService.deleteBoard(no);
        return ResponseEntity.noContent().build();
    }
}