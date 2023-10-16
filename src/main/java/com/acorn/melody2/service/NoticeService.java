package com.acorn.melody2.service;

import com.acorn.melody2.entity.Notice; // Notice로 수정
import com.acorn.melody2.repository.NoticeRepository; // BoardRepository에서 NoticeRepository로 수정
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoticeService {
    private final NoticeRepository noticeRepository; // NoticeRepository로 수정

    @Autowired
    public NoticeService(NoticeRepository noticeRepository) { // NoticeRepository로 수정
        this.noticeRepository = noticeRepository; // NoticeRepository로 수정
    }

    public List<Notice> getAllNotices() { // Notice로 수정
        return noticeRepository.findAll(); // NoticeRepository로 수정
    }

    public Optional<Notice> getNoticeById(Long id) { // Notice로 수정
        return noticeRepository.findById(id); // NoticeRepository로 수정
    }

    public Notice createNotice(Notice notice) { // Notice로 수정
        // 필요한 경우 유효성 검사 또는 비즈니스 로직 추가 가능
        return noticeRepository.save(notice); // NoticeRepository로 수정
    }

    public Notice updateNotice(Long id, Notice updatedNotice) { // Notice로 수정
        // 필요한 경우 유효성 검사 또는 비즈니스 로직 추가 가능
        updatedNotice.setUserAccountId(id);
        return noticeRepository.save(updatedNotice); // NoticeRepository로 수정
    }

    public void deleteNotice(Long id) { // Notice로 수정
        noticeRepository.deleteById(id); // NoticeRepository로 수정
    }
}