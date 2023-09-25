package com.acorn.melody2.service;

import com.acorn.melody2.entity.Playlist;
import com.acorn.melody2.entity.Song;
import com.acorn.melody2.entity.SongPlaylist;
import com.acorn.melody2.utils.PlaylistUtil;
import com.acorn.melody2.repository.SongRepository;
import com.acorn.melody2.repository.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class SongService {

    private final SongRepository songRepository;
    private final PlaylistRepository playlistRepository;

    @Autowired
    public SongService(SongRepository songRepository, PlaylistRepository playlistRepository) {
        this.songRepository = songRepository;
        this.playlistRepository = playlistRepository; // Initialize playlistRepository
    }

    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

    public Optional<Song> getSongById(int id) {
        return songRepository.findById(id);
    }

    public Song saveSong(Song song) {
        return songRepository.save(song);
    }

    public void deleteSong(int id) {
        songRepository.deleteById(id);
    }

    public void addSongToPlaylist(int songId, int playlistId) {
        Optional<Song> songOptional = songRepository.findById(songId);
        Optional<Playlist> playlistOptional = playlistRepository.findById(playlistId);

        if (songOptional.isPresent() && playlistOptional.isPresent()) {
            Song song = songOptional.get();
            Playlist playlist = playlistOptional.get();

            // Check if the song is not already in the playlist
            if (!PlaylistUtil.getSongsInPlaylist(playlist).contains(song)) {
                PlaylistUtil.addSongToPlaylist(playlist, song);
                playlistRepository.save(playlist);
            }
        }
    }

    public void removeSongFromPlaylist(int songId, int playlistId) {
        Optional<Song> songOptional = songRepository.findById(songId);
        Optional<Playlist> playlistOptional = playlistRepository.findById(playlistId);

        if (songOptional.isPresent() && playlistOptional.isPresent()) {
            Song song = songOptional.get();
            Playlist playlist = playlistOptional.get();

            // Check if the song is in the playlist
            if (PlaylistUtil.getSongsInPlaylist(playlist).contains(song)) {
                PlaylistUtil.removeSongFromPlaylist(playlist, song);
                playlistRepository.save(playlist);
            }
        }
    }
}
