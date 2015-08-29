package com.pcs.heaven.Admin.board.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class BoardInfoDaoImpl extends SqlSessionDaoSupport implements
		BoardInfoDao {

	public List<Map> getList(Map<String, Object> param) {
		System.out.println(param.toString());
		return getSqlSession().selectList("BoardInfo.getList", param);
	}
	
	public HashMap getCount(Map<String, Object> param) {
		return getSqlSession().selectOne("BoardInfo.getCount", param);
	}

	public HashMap getNext(Map<String, Object> param) {
		return getSqlSession().selectOne("BoardInfo.getNext", param);
	}

	public HashMap getInfo(Map<String, Object> param) {
		return getSqlSession().selectOne("BoardInfo.getInfo", param);
	}

	public int insertInfoBoard(Map<String, Object> param) {
		return getSqlSession().insert("BoardInfo.insertInfoBoard", param);
	}

	public int updateInfoBoard(Map<String, Object> param) {
		return getSqlSession().update("BoardInfo.updateInfoBoard", param);
	}

	public int deleteInfoBoard(Map<String, Object> param) {
		return getSqlSession().delete("BoardInfo.deleteInfoBoard", param);
	}

	
	/**
	 * file start
	 */
	public HashMap getFileNext(Map<String, Object> param) {
		return getSqlSession().selectOne("BoardInfo.getFileNext", param);
	}
	
	public int insertInfoBoardFile(Map<String, Object> param) {
		return getSqlSession().insert("BoardInfo.insertInfoBoardFile", param);
	}
	
	public List<Map> getFileList(Map<String, Object> param) {
		return getSqlSession().selectList("BoardInfo.getFileList", param);
	}
	
	public HashMap getFileListOne(Map<String, Object> param) {
		return getSqlSession().selectOne("BoardInfo.getFileListOne", param);
	}
	
	public int deleteInfoBoardFile(Map<String, Object> param) {
		return getSqlSession().delete("BoardInfo.deleteInfoBoardFile", param);
	}
}