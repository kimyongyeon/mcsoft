package com.pcs.heaven.Admin.menu.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class MenuInfoDaoImpl extends SqlSessionDaoSupport implements MenuInfoDao{
	
	public List<Map> getMenuMainList(Map<String, Object> param) {
		//UserInfoDao userInfoDao = this.sqlSessionTemplate.getMapper(UserInfoDao.class);
		//return userInfoDao.getLoginUserInfo(param);
		return getSqlSession().selectList("MenuInfo.getMenuMainList", param);
	}
	
	public HashMap getMenuMainInfo(Map<String, Object> param){
            //UserInfoDao userInfoDao = this.sqlSessionTemplate.getMapper(UserInfoDao.class);
            //return userInfoDao.getLoginUserInfo(param);
            return getSqlSession().selectOne("MenuInfo.getMenuMainInfo", param);
        }
	
	public HashMap getMenuMainNextCd(Map<String, Object> param){
            //UserInfoDao userInfoDao = this.sqlSessionTemplate.getMapper(UserInfoDao.class);
            //return userInfoDao.getLoginUserInfo(param);
            return getSqlSession().selectOne("MenuInfo.getMenuMainNextCd", param);
        }
        
	public int insertInfoMenuMain(Map<String, Object> param){
            //UserInfoDao userInfoDao = this.sqlSessionTemplate.getMapper(UserInfoDao.class);
            //return userInfoDao.getLoginUserInfo(param);
            return getSqlSession().insert("MenuInfo.insertInfoMenuMain", param);
        }
        
	public int updateInfoMenuMain(Map<String, Object> param){
            //UserInfoDao userInfoDao = this.sqlSessionTemplate.getMapper(UserInfoDao.class);
            //return userInfoDao.getLoginUserInfo(param);
            return getSqlSession().update("MenuInfo.updateInfoMenuMain", param);
        }
        
	public int deleteInfoMenuMain(Map<String, Object> param){
            //UserInfoDao userInfoDao = this.sqlSessionTemplate.getMapper(UserInfoDao.class);
            //return userInfoDao.getLoginUserInfo(param);
            return getSqlSession().delete("MenuInfo.deleteInfoMenuMain", param);
        }
	
}