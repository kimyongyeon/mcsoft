package com.pcs.heaven.Admin.calendar;

import java.util.ArrayList;
import java.util.Calendar;
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
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.pcs.heaven.Admin.calendar.Dao.CalendarInfoDaoImpl;
import com.pcs.heaven.Common.upload.UploadFile;
import com.pcs.heaven.Common.upload.UploadFileUtil;
import com.pcs.heaven.Common.util.DateUtil;
import com.pcs.heaven.Param.RequestParam;

@Controller
public class AdminCalendarController {
	
        private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());
		
        @Resource(name="calendarInfoDaoImpl")
        private CalendarInfoDaoImpl calendarInfoDaoImpl;
        
        /**
         * 목록
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
	@RequestMapping(value="/admin/calendar/List")
	public ModelAndView list(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

	        String strAction = "/Admin/calendar/List";
            ModelAndView mav = new ModelAndView(strAction);
            
            String strCalYear = "";
            String strCalMonth = "";
            strCalYear = reqMap.get("cal_year");
            strCalMonth = reqMap.get("cal_month");
            
            Calendar calendar = Calendar.getInstance();
            String strCurrentDay = DateUtil.getYyyymmdd(calendar);
            if(strCalYear == null || strCalYear.equals("")  || strCalYear.equals("null")) {
            	strCalYear = strCurrentDay.substring(0,  4);
            	reqMap.set("cal_year", strCalYear);
            }
            if(strCalMonth == null || strCalMonth.equals("") || strCalMonth.equals("null")) {
            	strCalMonth = strCurrentDay.substring(4,  6);
            	reqMap.set("cal_month", strCalMonth);
            }
            
            List<Map> list = this.calendarInfoDaoImpl.getList(reqMap.getParameter());
		
            mav.addObject("list", list);
            mav.addObject("cal_year", reqMap.get("cal_year"));
            mav.addObject("cal_month", reqMap.get("cal_month"));
		        
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
	@RequestMapping(value="/admin/calendar/Form")
        public ModelAndView form(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/calendar/Form";
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
        @RequestMapping(value="/admin/calendar/Info")
        public ModelAndView info(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/calendar/Info";
                ModelAndView mav = new ModelAndView(strAction);                                        
                HashMap hm = this.calendarInfoDaoImpl.getInfo(reqMap.getParameter());
                
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
        @RequestMapping(value="/admin/calendar/Insert")
        public ModelAndView insertInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, @ModelAttribute("uploadForm") UploadFile uploadfile) {

                String strAction = "redirect:/admin/calendar/List.do";
                ModelAndView mav = new ModelAndView(strAction);
                
                HashMap hm = this.calendarInfoDaoImpl.getNextCd(reqMap.getParameter());
                
                if(hm != null && hm.size() > 0) {
                    String strNextCd = String.valueOf(hm.get("nextcd"));
                    reqMap.set("resource_seq", strNextCd);
                    
                    
                    try {
                    	String strType = "HTML_FILE_ROOT";
                    	List<HashMap<String, Object>> fileList = new ArrayList<HashMap<String, Object>>(); 
                    	UploadFileUtil utf = new UploadFileUtil();
                    	fileList = utf.FileUpload(uploadfile, strType);
                    	
                    	if(fileList != null && fileList.size() > 0) {                    		
                    		
                    		for(int i=0; i<fileList.size(); i++) {
                    			HashMap<String, Object> fileMap = new HashMap<String, Object>();
                    			fileMap = fileList.get(i);
                    			
                    			reqMap.set("resource_org_file", (String)fileMap.get("attach_org_name"));
                    			reqMap.set("resource_upload_file", (String)fileMap.get("attach_save_name"));
                    		}
                    	}
                    	
                    } catch(Exception e) {
                    	
                    }
                    
                    if(reqMap.get("resource_org_file") != null && !reqMap.get("resource_org_file").equals("")) {
                    	this.calendarInfoDaoImpl.insertInfoResource(reqMap.getParameter());
                    }
                    
                }
                
                return mav;
        }
        
        /**
         * 수정
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/calendar/Update")
        public ModelAndView updateInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, @ModelAttribute("uploadForm") UploadFile uploadfile) {

                String strAction = "redirect:/admin/calendar/List.do";
                ModelAndView mav = new ModelAndView(strAction);            
                
                try {
                	String strType = "APK_FILE_ROOT";
                	List<HashMap<String, Object>> fileList = new ArrayList<HashMap<String, Object>>(); 
                	UploadFileUtil utf = new UploadFileUtil();
                	fileList = utf.FileUpload(uploadfile, strType);
                	
                	if(fileList != null && fileList.size() > 0) {                    		
                		
                		for(int i=0; i<fileList.size(); i++) {
                			HashMap<String, Object> fileMap = new HashMap<String, Object>();
                			fileMap = fileList.get(i);
                			
                			reqMap.set("resource_org_file", (String)fileMap.get("attach_org_name"));
                			reqMap.set("resource_upload_file", (String)fileMap.get("attach_save_name"));
                		}
                	}
                	
                } catch(Exception e) {
                	
                }
                
                this.calendarInfoDaoImpl.updateInfoResource(reqMap.getParameter());
                
                return mav;
        }
        
        /**
         * 삭제
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/calendar/Delete")
        public ModelAndView deleteInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/calendar/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.calendarInfoDaoImpl.deleteInfoResource(reqMap.getParameter());
                
                return mav;
        }
}