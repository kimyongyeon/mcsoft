package com.pcs.heaven.Admin.calendar.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class CalendarInfoDaoImpl extends SqlSessionDaoSupport implements CalendarInfoDao{
	
	public List<Map> getList(Map<String, Object> param) {
		return getSqlSession().selectList("CalendarInfo.getList", param);
	}
	
	public HashMap getNextCd(Map<String, Object> param){
            return getSqlSession().selectOne("CalendarInfo.getNextCd", param);
        }
	
	public HashMap getInfo(Map<String, Object> param){
            return getSqlSession().selectOne("CalendarInfo.getInfo", param);
        }
        
	public int insertInfoResource(Map<String, Object> param){
            return getSqlSession().insert("CalendarInfo.insertInfoResource", param);
        }
        
	public int updateInfoResource(Map<String, Object> param){
            return getSqlSession().update("CalendarInfo.updateInfoResource", param);
        }
        
	public int deleteInfoResource(Map<String, Object> param){
            return getSqlSession().delete("CalendarInfo.deleteInfoResource", param);
        }
	
}