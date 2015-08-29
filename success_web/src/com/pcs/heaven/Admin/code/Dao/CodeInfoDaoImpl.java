package com.pcs.heaven.Admin.code.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class CodeInfoDaoImpl extends SqlSessionDaoSupport implements CodeInfoDao{
	/**
	 * main
	 */
	public List<Map> getCodeMainList(Map<String, Object> param) {
		return getSqlSession().selectList("CodeInfo.getCodeMainList", param);
	}
	
	public HashMap getCodeMainInfo(Map<String, Object> param){
            return getSqlSession().selectOne("CodeInfo.getCodeMainInfo", param);
        }
	
	public HashMap getCodeMainNextCd(Map<String, Object> param){
            return getSqlSession().selectOne("CodeInfo.getCodeMainNextCd", param);
        }
        
	public int insertInfoCodeMain(Map<String, Object> param){
            return getSqlSession().insert("CodeInfo.insertInfoCodeMain", param);
        }
        
	public int updateInfoCodeMain(Map<String, Object> param){
            return getSqlSession().update("CodeInfo.updateInfoCodeMain", param);
        }
        
	public int deleteInfoCodeMain(Map<String, Object> param){
            return getSqlSession().delete("CodeInfo.deleteInfoCodeMain", param);
        }
	
	/**
     * middle
     */
    public List<Map> getCodeMiddleList(Map<String, Object> param) {
            return getSqlSession().selectList("CodeInfo.getCodeMiddleList", param);
    }
    
    public HashMap getCodeMiddleInfo(Map<String, Object> param){
        return getSqlSession().selectOne("CodeInfo.getCodeMiddleInfo", param);
    }
    
    public HashMap getCodeMiddleNextCd(Map<String, Object> param){
        return getSqlSession().selectOne("CodeInfo.getCodeMiddleNextCd", param);
    }
    
    public int insertInfoCodeMiddle(Map<String, Object> param){
        return getSqlSession().insert("CodeInfo.insertInfoCodeMiddle", param);
    }
    
    public int updateInfoCodeMiddle(Map<String, Object> param){
        return getSqlSession().update("CodeInfo.updateInfoCodeMiddle", param);
    }
    
    public int deleteInfoCodeMiddle(Map<String, Object> param){
        return getSqlSession().delete("CodeInfo.deleteInfoCodeMiddle", param);
    }
    
    /**
     * small
     */
    public List<Map> getCodeSmallList(Map<String, Object> param) {
            return getSqlSession().selectList("CodeInfo.getCodeSmallList", param);
    }
    
    public HashMap getCodeSmallInfo(Map<String, Object> param){
        return getSqlSession().selectOne("CodeInfo.getCodeSmallInfo", param);
    }
    
    public HashMap getCodeSmallNextCd(Map<String, Object> param){
        return getSqlSession().selectOne("CodeInfo.getCodeSmallNextCd", param);
    }
    
    public int insertInfoCodeSmall(Map<String, Object> param){
        return getSqlSession().insert("CodeInfo.insertInfoCodeSmall", param);
    }
    
    public int updateInfoCodeSmall(Map<String, Object> param){
        return getSqlSession().update("CodeInfo.updateInfoCodeSmall", param);
    }
    
    public int deleteInfoCodeSmall(Map<String, Object> param){
        return getSqlSession().delete("CodeInfo.deleteInfoCodeSmall", param);
    }
	
}