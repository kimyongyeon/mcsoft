package com.pcs.heaven.Admin.boardManage;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.pcs.heaven.Admin.boardManage.Dao.BoardManageInfoDaoImpl;
import com.pcs.heaven.Common.Session.UserSession;
import com.pcs.heaven.Param.RequestParam;

@Controller
public class AdminBoardManageController {
	
        private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());
		
        @Resource(name="boardManageInfoDaoImpl")
        private BoardManageInfoDaoImpl boardManageInfoDaoImpl;
        
        
        /**
         * 목록
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
	@RequestMapping(value="/admin/boardManage/List")
	public ModelAndView list(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

	        String strAction = "/Admin/boardManage/List";
            ModelAndView mav = new ModelAndView(strAction);
            List<Map> list = this.boardManageInfoDaoImpl.getList(reqMap.getParameter());
		
            mav.addObject("list", list);
		        
            return mav;
	}
	
	/**
	 * 등록폼
	 * @param reqMap
	 * @param model
	 * @param request
	 * @param response
	 * @param handler
	 * @return
	 */
	@RequestMapping(value="/admin/boardManage/Form")
        public ModelAndView form(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/boardManage/Form";
                ModelAndView mav = new ModelAndView(strAction);
                                        
                return mav;
        }


	/**
	 * 정보
	 * @param reqMap
	 * @param model
	 * @param request
	 * @param response
	 * @param handler
	 * @return
	 */
        @RequestMapping(value="/admin/boardManage/Info")
        public ModelAndView info(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/boardManage/Info";
                ModelAndView mav = new ModelAndView(strAction);                                        
                HashMap hm = this.boardManageInfoDaoImpl.getInfo(reqMap.getParameter());
                
                mav.addObject("info", hm);
                
                return mav;
        }
        
        /**
         * 등록
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/boardManage/Insert")
        public ModelAndView insertInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/boardManage/List.do";
                ModelAndView mav = new ModelAndView(strAction);
                HashMap hm = boardManageInfoDaoImpl.getBoardManageNextCd(reqMap.getParameter());
                UserSession userSession = (UserSession)request.getSession().getAttribute("USER_SESSION");
                
                if(hm != null && hm.size() > 0) {
                	String strNextCd = String.valueOf(hm.get("nextcd"));
                    reqMap.set("manage_seq", strNextCd);
                    reqMap.set("manage_writer", userSession.getUser_id());
                    
                	this.boardManageInfoDaoImpl.insertInfoBoardManage(reqMap.getParameter());
                }
                
                
                return mav;
        }
        
        /**
         * 메뉴 수정
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/boardManage/Update")
        public ModelAndView updateInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/boardManage/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.boardManageInfoDaoImpl.updateInfoBoardManage(reqMap.getParameter());
                
                return mav;
        }
        
        /**
         * 메뉴 삭제
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/boardManage/Delete")
        public ModelAndView deleteInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/boardManage/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.boardManageInfoDaoImpl.deleteInfoBoardManage(reqMap.getParameter());
                
                return mav;
        }
        
        
        @RequestMapping(value="/admin/boardManage/test")
        public ModelAndView test(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {
        	
        	try {
	        	//String s1 = "20130101";
	        	//String s2 = "20140201";
	        	
	        	String s1 = reqMap.get("start");
	        	String s2 = reqMap.get("end");
	        	
	        	DateFormat df = new SimpleDateFormat("yyyymmdd");
	        	
	        	Date d1 = df.parse(s1);
	        	Date d2 = df.parse(s2); 
	        	
	        	Calendar c1 = Calendar.getInstance();
	        	Calendar c2 = Calendar.getInstance();
	        	
	        	c1.setTime(d1);
	        	c2.setTime(d2);
	        	
	        	
	        	
	        	System.out.println(c1.getTime());
	        	System.out.println(c2.getTime());
	        	
	        	List list = new ArrayList();
	        	
	        	this.boardManageInfoDaoImpl.deleteInfoCalendar(reqMap.getParameter());
	        	
	        	while(c1.compareTo(c2) != 1) {
	        		System.out.printf("%tF\n", c1.getTime());
	        		
	        		/*String strYear = c1.get(c1.YEAR)+"";
	        		
	        		int intMonth = c1.get(c1.MONTH)+1;
	        		String strMonth = "";
	        		if(intMonth < 10) {
	        			strMonth = "0"+intMonth;
	        		} else {
	        			strMonth = intMonth+"";
	        		}
	        		
	        		int intDay =  c1.get(c1.DAY_OF_MONTH);
	        		String strDay = "";
	        		if(intDay < 10) {
	        			strDay = "0"+strDay;
	        		} else {
	        			strDay = intDay+"";
	        		}*/
	        		
	        		
	        		System.out.println(c1.get(c1.DAY_OF_MONTH));
	        		
	        		System.out.println(c1.get(c1.DAY_OF_WEEK_IN_MONTH));
	        		
	        		int day_of_week = c1.get(c1.DAY_OF_WEEK);
	        		System.out.println("요일은 : " + c1.getTime()+ day_of_week);
	                
            		/*  SUNDAY    = 1
            	     *  MONDAY    = 2
            	     *  TUESDAY   = 3
            	     *  WEDNESDAY = 4
            	     *  THURSDAY  = 5
            	     *  FRIDAY    = 6
            	     *  
            	     */
            
	        		String strYoil = "";
		            if(day_of_week == 1) {
		            	strYoil = "일";
		            } else if(day_of_week == 2) {
		            	strYoil = "월";
		            } else if(day_of_week == 3) {
		            	strYoil = "화";
		            } else if(day_of_week == 4) {
		            	strYoil = "수";
		            } else if(day_of_week == 5) {
		            	strYoil = "목";
		            } else if(day_of_week == 6) {
		            	strYoil = "금";
		            } else if(day_of_week == 7) {
		            	strYoil = "토";
		            }
	        		
		            String str = String.format("%tF", c1.getTime()).replace("-", "");
		            
		            System.out.println(str.substring(0, 4));
		            System.out.println(str.substring(4, 6));
		            System.out.println(str.substring(6,8));
		            
		           
		            HashMap pMap = new HashMap();
		            pMap.put("cal_fullday", str);
		            pMap.put("cal_fulldayopt", str.substring(0, 4)+"-"+str.substring(4, 6)+"-"+str.substring(6, 8));
		            pMap.put("cal_year", str.substring(0, 4));
		            pMap.put("cal_month", str.substring(4, 6));
		            pMap.put("cal_day", str.substring(6, 8));
		            pMap.put("cal_youl_han", strYoil);
		            pMap.put("cal_yoil_cnt", day_of_week);
		            
		            
		            System.out.println(pMap.toString());
		            
		            this.boardManageInfoDaoImpl.insertInfoCalendar(pMap);
	        		
	        		c1.add(Calendar.DATE, 1);
	        		
	                
	                
	                
	        	}
        	} catch(Exception e) {
        		System.out.println(e.toString());
        	}
        	
        	String strAction = "/Admin/boardManage/test";
            ModelAndView mav = new ModelAndView(strAction);   
            
            return mav;
        }
}