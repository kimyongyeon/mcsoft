package com.pcs.heaven.Admin.trcode.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class TrcodeInfoDaoImpl extends SqlSessionDaoSupport implements TrcodeInfoDao{
	
	public List<Map> getList(Map<String, Object> param) {
		return getSqlSession().selectList("TrcodeInfo.getList", param);
	}
	
	public HashMap getExist(Map<String, Object> param){
            return getSqlSession().selectOne("TrcodeInfo.getExist", param);
        }
	
	public HashMap getInfo(Map<String, Object> param){
            return getSqlSession().selectOne("TrcodeInfo.getInfo", param);
        }
        
	public int insertInfoTrcode(Map<String, Object> param){
            return getSqlSession().insert("TrcodeInfo.insertInfoTrcode", param);
        }
        
	public int updateInfoTrcode(Map<String, Object> param){
            return getSqlSession().update("TrcodeInfo.updateInfoTrcode", param);
        }
        
	public int deleteInfoTrcode(Map<String, Object> param){
            return getSqlSession().delete("TrcodeInfo.deleteInfoTrcode", param);
        }
	
}