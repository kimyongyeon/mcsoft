package com.pcs.heaven.Admin.apk;

import java.util.ArrayList;
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

import com.pcs.heaven.Admin.apk.Dao.ApkInfoDaoImpl;
import com.pcs.heaven.Common.upload.UploadFile;
import com.pcs.heaven.Common.upload.UploadFileUtil;
import com.pcs.heaven.Param.RequestParam;

@Controller
public class AdminApkController {
	
        private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());
		
        @Resource(name="apkInfoDaoImpl")
        private ApkInfoDaoImpl apkInfoDaoImpl;
        
        /**
         * 목록
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
	@RequestMapping(value="/admin/apk/List")
	public ModelAndView list(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

	        String strAction = "/Admin/apk/List";
            ModelAndView mav = new ModelAndView(strAction);
            List<Map> list = this.apkInfoDaoImpl.getList(reqMap.getParameter());
		
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
	@RequestMapping(value="/admin/apk/Form")
        public ModelAndView form(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/apk/Form";
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
        @RequestMapping(value="/admin/apk/Info")
        public ModelAndView info(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/apk/Info";
                ModelAndView mav = new ModelAndView(strAction);                                        
                HashMap hm = this.apkInfoDaoImpl.getInfo(reqMap.getParameter());
                
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
        @RequestMapping(value="/admin/apk/Insert")
        public ModelAndView insertInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, @ModelAttribute("uploadForm") UploadFile uploadfile) {

                String strAction = "redirect:/admin/apk/List.do";
                ModelAndView mav = new ModelAndView(strAction);
                
                HashMap hm = this.apkInfoDaoImpl.getNextCd(reqMap.getParameter());
                if(hm != null && hm.size() > 0) {
                    String strNextCd = String.valueOf(hm.get("nextcd"));
                    reqMap.set("apk_seq", strNextCd);
                    
                    
                    try {
                    	String strType = "APK_FILE_ROOT";
                    	List<HashMap<String, Object>> fileList = new ArrayList<HashMap<String, Object>>(); 
                    	UploadFileUtil utf = new UploadFileUtil();
                    	fileList = utf.FileUpload(uploadfile, strType);
                    	
                    	if(fileList != null && fileList.size() > 0) {                    		
                    		
                    		for(int i=0; i<fileList.size(); i++) {
                    			HashMap<String, Object> fileMap = new HashMap<String, Object>();
                    			fileMap = fileList.get(i);
                    			
                    			reqMap.set("apk_org_file", (String)fileMap.get("attach_org_name"));
                    			reqMap.set("apk_upload_file", (String)fileMap.get("attach_save_name"));
                    		}
                    	}
                    	
                    } catch(Exception e) {                    	
                    }
                    
                    if(reqMap.get("apk_org_file") != null && !reqMap.get("apk_org_file").equals("")) {
                    	this.apkInfoDaoImpl.insertInfoApk(reqMap.getParameter());
                    	
                    	if(reqMap.get("use_yn").equals("Y")) {
                    		reqMap.set("not_use_yn", "N");
                    		this.apkInfoDaoImpl.updateApkAll(reqMap.getParameter());
                    	}
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
        @RequestMapping(value="/admin/apk/Update")
        public ModelAndView updateInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, @ModelAttribute("uploadForm") UploadFile uploadfile) {

                String strAction = "redirect:/admin/apk/List.do";
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
                			
                			reqMap.set("apk_org_file", (String)fileMap.get("attach_org_name"));
                			reqMap.set("apk_upload_file", (String)fileMap.get("attach_save_name"));
                		}
                	}
                	
                } catch(Exception e) {
                	
                }
                
               
               this.apkInfoDaoImpl.updateInfoApk(reqMap.getParameter());
               if(reqMap.get("use_yn").equals("Y")) {
            	   reqMap.set("not_use_yn", "N");
            	   this.apkInfoDaoImpl.updateApkAll(reqMap.getParameter());
               }
                
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
        @RequestMapping(value="/admin/apk/Delete")
        public ModelAndView deleteInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/apk/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.apkInfoDaoImpl.deleteInfoApk(reqMap.getParameter());
                
                return mav;
        }
}