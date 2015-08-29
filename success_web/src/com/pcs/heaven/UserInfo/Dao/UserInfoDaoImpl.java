package com.pcs.heaven.UserInfo.Dao;

import java.util.Map;

import javax.annotation.Resource;
import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.pcs.heaven.Common.Session.UserSession;

@Repository
public class UserInfoDaoImpl extends SqlSessionDaoSupport implements UserInfoDao {
//public class UserInfoDaoImpl implements UserInfoDao {
	
	@Override
	public int getLoginUserInfoExist(Map<String, Object> param) {
		//UserInfoDao userInfoDao = this.sqlSessionTemplate.getMapper(UserInfoDao.class);
		//return userInfoDao.getLoginUserInfo(param);
		return (Integer) getSqlSession().selectOne("UserInfo.getLoginUserInfoExist", param);
	}
	
	@Override
	public UserSession getLoginUserInfo(Map<String, Object> param) {
		//UserInfoDao userInfoDao = this.sqlSessionTemplate.getMapper(UserInfoDao.class);
		//return userInfoDao.getLoginUserInfo(param);
		return (UserSession) getSqlSession().selectOne("UserInfo.getLoginUserInfo", param);
	}
	
	@Override
	public int insertIntoTbUserLoginInfo(Map<String, Object> param) {
	    int intRtn = 0;
	    try {
	        intRtn = getSqlSession().insert("insertIntoTbUserLoginInfo", param);
	    } catch (Exception e) {
	        e.printStackTrace();
	        intRtn = -1;
	    }
	    
	    return intRtn;
	}
	
	@Override
        public int insertIntoTbUserInfo(Map<String, Object> param) {
            int intRtn = 0;
            try {
                intRtn = getSqlSession().insert("insertIntoTbUserInfo", param);
            } catch (Exception e) {
                e.printStackTrace();
                intRtn = -1;
            }
            
            return intRtn;
        }
	
}