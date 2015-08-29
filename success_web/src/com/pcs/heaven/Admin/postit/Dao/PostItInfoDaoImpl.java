package com.pcs.heaven.Admin.postit.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class PostItInfoDaoImpl extends SqlSessionDaoSupport implements PostItInfoDao {

	public List<Map> getList(Map<String, Object> param) {
		return getSqlSession().selectList("PostItInfo.getList", param);
	}

	public HashMap getNext(Map<String, Object> param) {
		return getSqlSession().selectOne("PostItInfo.getNext", param);
	}

	public HashMap getInfo(Map<String, Object> param) {
		return getSqlSession().selectOne("PostItInfo.getInfo", param);
	}

	public int insertInfoPostIt(Map<String, Object> param) {
		return getSqlSession().insert("PostItInfo.insertInfoPostIt", param);
	}

	public int updateInfoPostIt(Map<String, Object> param) {
		return getSqlSession().update("PostItInfo.updateInfoPostIt", param);
	}

	public int deleteInfoPostIt(Map<String, Object> param) {
		return getSqlSession().delete("PostItInfo.deleteInfoPostIt", param);
	}

	
	/**
	 * file start
	 */
	public HashMap getFileNext(Map<String, Object> param) {
		return getSqlSession().selectOne("PostItInfo.getFileNext", param);
	}
	
	public int insertInfoPostItFile(Map<String, Object> param) {
		return getSqlSession().insert("PostItInfo.insertInfoPostItFile", param);
	}
	
	public List<Map> getFileList(Map<String, Object> param) {
		return getSqlSession().selectList("PostItInfo.getFileList", param);
	}
	
	public HashMap getFileListOne(Map<String, Object> param) {
		return getSqlSession().selectOne("PostItInfo.getFileListOne", param);
	}
	
	public int deleteInfoPostItFile(Map<String, Object> param) {
		return getSqlSession().delete("PostItInfo.deleteInfoPostItFile", param);
	}
}