package com.pcs.heaven.Admin.resource;

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

import com.pcs.heaven.Admin.resource.Dao.ResourceInfoDaoImpl;
import com.pcs.heaven.Common.upload.UploadFile;
import com.pcs.heaven.Common.upload.UploadFileUtil;
import com.pcs.heaven.Param.RequestParam;

@Controller
public class AdminResourceController {
	
        private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());
		
        @Resource(name="resourceInfoDaoImpl")
        private ResourceInfoDaoImpl resourceInfoDaoImpl;
        
        /**
         * 목록
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
	@RequestMapping(value="/admin/resource/List")
	public ModelAndView list(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

	        String strAction = "/Admin/resource/List";
            ModelAndView mav = new ModelAndView(strAction);
            List<Map> list = this.resourceInfoDaoImpl.getList(reqMap.getParameter());
		
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
	@RequestMapping(value="/admin/resource/Form")
        public ModelAndView form(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/resource/Form";
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
        @RequestMapping(value="/admin/resource/Info")
        public ModelAndView info(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/resource/Info";
                ModelAndView mav = new ModelAndView(strAction);                                        
                HashMap hm = this.resourceInfoDaoImpl.getInfo(reqMap.getParameter());
                
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
        @RequestMapping(value="/admin/resource/Insert")
        public ModelAndView insertInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, @ModelAttribute("uploadForm") UploadFile uploadfile) {

                String strAction = "redirect:/admin/resource/List.do";
                ModelAndView mav = new ModelAndView(strAction);
                
                HashMap hm = this.resourceInfoDaoImpl.getNextCd(reqMap.getParameter());
                
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
                    	this.resourceInfoDaoImpl.insertInfoResource(reqMap.getParameter());
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
        @RequestMapping(value="/admin/resource/Update")
        public ModelAndView updateInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, @ModelAttribute("uploadForm") UploadFile uploadfile) {

                String strAction = "redirect:/admin/resource/List.do";
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
                
                this.resourceInfoDaoImpl.updateInfoResource(reqMap.getParameter());
                
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
        @RequestMapping(value="/admin/resource/Delete")
        public ModelAndView deleteInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/resource/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.resourceInfoDaoImpl.deleteInfoResource(reqMap.getParameter());
                
                return mav;
        }
}