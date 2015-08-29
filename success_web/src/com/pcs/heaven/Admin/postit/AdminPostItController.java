package com.pcs.heaven.Admin.postit;

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

import com.pcs.heaven.Admin.postit.Dao.PostItInfoDaoImpl;
import com.pcs.heaven.Common.Session.UserSession;
import com.pcs.heaven.Common.upload.UploadFile;
import com.pcs.heaven.Common.upload.UploadFileUtil;
import com.pcs.heaven.Param.RequestParam;

@Controller
public class AdminPostItController {
	
        private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());
		
        @Resource(name="postItInfoDaoImpl")
        private PostItInfoDaoImpl postItInfoDaoImpl;
        
        /**
         * 목록
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
	@RequestMapping(value="/admin/postit/List")
	public ModelAndView list(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

	        String strAction = "/Admin/postit/List";
            ModelAndView mav = new ModelAndView(strAction);
            List<Map> list = this.postItInfoDaoImpl.getList(reqMap.getParameter());		
            mav.addObject("list", list);
            mav.addObject("manage_seq", reqMap.get("manage_seq"));    
            
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
	@RequestMapping(value="/admin/postit/Form")
        public ModelAndView form(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/postit/Form";
                ModelAndView mav = new ModelAndView(strAction);
                mav.addObject("manage_seq", reqMap.get("manage_seq"));                        
                
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
        @RequestMapping(value="/admin/postit/Info")
        public ModelAndView info(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/postit/Info";
                ModelAndView mav = new ModelAndView(strAction);                                        
                HashMap hm = this.postItInfoDaoImpl.getInfo(reqMap.getParameter());
                List<Map> filelist = this.postItInfoDaoImpl.getFileList(reqMap.getParameter());
                mav.addObject("info", hm);
                mav.addObject("filelist", filelist);
                
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
        @RequestMapping(value="/admin/postit/Insert")
        public ModelAndView insertInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, @ModelAttribute("uploadForm") UploadFile uploadfile) {

                String strAction = "redirect:/admin/postit/List.do";
                ModelAndView mav = new ModelAndView(strAction);
                
                UserSession userSession = (UserSession)request.getSession().getAttribute("USER_SESSION");
                
                
                HashMap hm = this.postItInfoDaoImpl.getNext(reqMap.getParameter());
                
                if(hm != null && hm.size() > 0) {
                    String strCnt = String.valueOf(hm.get("next_seq"));
                    reqMap.set("postit_seq", strCnt);
                    reqMap.set("postit_user_id", userSession.getUser_id());
                    reqMap.set("postit_view_count", "0");
                    
                    this.postItInfoDaoImpl.insertInfoPostIt(reqMap.getParameter());
                    
                    System.out.println("================= file start ======================");
                    try {
                    	String strType = "IMG_FILE_ROOT";
                    	List<HashMap<String, Object>> fileList = new ArrayList<HashMap<String, Object>>(); 
                    	UploadFileUtil utf = new UploadFileUtil();
                    	fileList = utf.FileUpload(uploadfile, strType);
                    	
                    	if(fileList != null && fileList.size() > 0) {
                    		HashMap fileM= this.postItInfoDaoImpl.getFileNext(reqMap.getParameter());
                    		int intFileSeq = Integer.parseInt(String.valueOf(fileM.get("next_seq")));
                    		
                    		for(int i=0; i<fileList.size(); i++) {
                    			HashMap<String, Object> fileMap = new HashMap<String, Object>();
                    			fileMap = fileList.get(i);
                    			fileMap.put("attach_seq", intFileSeq);
                    			fileMap.put("postit_seq", strCnt);
                    			fileMap.put("attach_writer", userSession.getUser_id());
                    			
                    			this.postItInfoDaoImpl.insertInfoPostItFile(fileMap);
                    			
                    			intFileSeq++;
                    		}
                    	}
                    	
                    } catch(Exception e) {
                    	
                    }
                    System.out.println("================= file end ======================");
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
        @RequestMapping(value="/admin/postit/Update")
        public ModelAndView updateInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, @ModelAttribute("uploadForm") UploadFile uploadfile) {
        	
        		String strAction = "redirect:/admin/postit/List.do?manage_seq="+reqMap.get("manage_seq");
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.postItInfoDaoImpl.updateInfoPostIt(reqMap.getParameter());
                UserSession userSession = (UserSession)request.getSession().getAttribute("USER_SESSION");
                
                System.out.println("================= file start ======================");
                try {
                	String strType = "IMG_FILE_ROOT";
                	List<HashMap<String, Object>> fileList = new ArrayList<HashMap<String, Object>>(); 
                	UploadFileUtil utf = new UploadFileUtil();
                	fileList = utf.FileUpload(uploadfile, strType);
                	
                	if(fileList != null && fileList.size() > 0) {
                		HashMap fileM= this.postItInfoDaoImpl.getFileNext(reqMap.getParameter());
                		int intFileSeq = Integer.parseInt(String.valueOf(fileM.get("next_seq")));
                		
                		for(int i=0; i<fileList.size(); i++) {
                			HashMap<String, Object> fileMap = new HashMap<String, Object>();
                			fileMap = fileList.get(i);
                			fileMap.put("attach_seq", intFileSeq);
                			fileMap.put("postit_seq", reqMap.get("PostIt_seq"));
                			fileMap.put("attach_writer", userSession.getUser_id());
                			
                			this.postItInfoDaoImpl.insertInfoPostItFile(fileMap);
                			
                			intFileSeq++;
                		}
                	}
                	
                } catch(Exception e) {
                	
                }
                System.out.println("================= file end ======================");
                
                
                /**
                 * 파일관련 삭제
                 */
                String[] arrFileDel = reqMap.get("arr_attach_seq").split(",");
                if(arrFileDel != null && arrFileDel.length > 0) {
                	for(int i=0; i<arrFileDel.length; i++) {
                		HashMap hm = new HashMap();
                		hm.put("postit_seq", reqMap.get("postit_seq"));
                		hm.put("attach_seq", arrFileDel[i]);
                		
                		this.postItInfoDaoImpl.deleteInfoPostItFile(hm);
                		
                	}
                }
                
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
        @RequestMapping(value="/admin/postit/Delete")
        public ModelAndView deleteInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/postit/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.postItInfoDaoImpl.deleteInfoPostIt(reqMap.getParameter());
                
                return mav;
        }
}