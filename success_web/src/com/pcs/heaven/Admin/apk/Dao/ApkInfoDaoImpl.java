package com.pcs.heaven.Admin.apk.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class ApkInfoDaoImpl extends SqlSessionDaoSupport implements ApkInfoDao {

	public List<Map> getList(Map<String, Object> param) {
		return getSqlSession().selectList("ApkInfo.getList", param);
	}

	public HashMap getNextCd(Map<String, Object> param) {
		return getSqlSession().selectOne("ApkInfo.getNextCd", param);
	}

	public HashMap getInfo(Map<String, Object> param) {
		return getSqlSession().selectOne("ApkInfo.getInfo", param);
	}

	public int insertInfoApk(Map<String, Object> param) {
		return getSqlSession().insert("ApkInfo.insertInfoApk", param);
	}

	public int updateInfoApk(Map<String, Object> param) {
		return getSqlSession().update("ApkInfo.updateInfoApk", param);
	}

	public int deleteInfoApk(Map<String, Object> param) {
		return getSqlSession().delete("ApkInfo.deleteInfoApk", param);
	}
	
	public int updateApkAll(Map<String, Object> param) {
		return getSqlSession().update("ApkInfo.updateApkAll", param);
	}

}