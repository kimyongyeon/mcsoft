package com.pcs.heaven.Admin.boardManage.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class BoardManageInfoDaoImpl extends SqlSessionDaoSupport implements BoardManageInfoDao{
	
	public List<Map> getList(Map<String, Object> param) {
		return getSqlSession().selectList("BoardManageInfo.getList", param);
	}
	
	public HashMap getInfo(Map<String, Object> param){
		return getSqlSession().selectOne("BoardManageInfo.getInfo", param);
	}
      
	public HashMap getBoardManageNextCd(Map<String, Object> param){
        return getSqlSession().selectOne("BoardManageInfo.getBoardManageNextCd", param);
    }
	
	public int insertInfoBoardManage(Map<String, Object> param){
		return getSqlSession().insert("BoardManageInfo.insertInfoBoardManage", param);
	}
        
	public int updateInfoBoardManage(Map<String, Object> param){
		return getSqlSession().update("BoardManageInfo.updateInfoBoardManage", param);
	}
        
	public int deleteInfoBoardManage(Map<String, Object> param){
		return getSqlSession().delete("BoardManageInfo.deleteInfoBoardManage", param);
	}
	
	public List<Map> getBoardMenuList(Map<String, Object> param) {
		return getSqlSession().selectList("BoardManageInfo.getListForMenu", param);
	}
	
	
	public int deleteInfoCalendar(Map<String, Object> param){
		return getSqlSession().delete("BoardManageInfo.deleteCalendar", param);
	}
	
	public int insertInfoCalendar(Map<String, Object> param){
		return getSqlSession().insert("BoardManageInfo.insertCalendar", param);
	}
}