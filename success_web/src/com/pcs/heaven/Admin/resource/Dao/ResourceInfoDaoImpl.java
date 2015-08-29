package com.pcs.heaven.Admin.resource.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class ResourceInfoDaoImpl extends SqlSessionDaoSupport implements ResourceInfoDao{
	
	public List<Map> getList(Map<String, Object> param) {
		return getSqlSession().selectList("ResourceInfo.getList", param);
	}
	
	public HashMap getNextCd(Map<String, Object> param){
            return getSqlSession().selectOne("ResourceInfo.getNextCd", param);
        }
	
	public HashMap getInfo(Map<String, Object> param){
            return getSqlSession().selectOne("ResourceInfo.getInfo", param);
        }
        
	public int insertInfoResource(Map<String, Object> param){
            return getSqlSession().insert("ResourceInfo.insertInfoResource", param);
        }
        
	public int updateInfoResource(Map<String, Object> param){
            return getSqlSession().update("ResourceInfo.updateInfoResource", param);
        }
        
	public int deleteInfoResource(Map<String, Object> param){
            return getSqlSession().delete("ResourceInfo.deleteInfoResource", param);
        }
	
}