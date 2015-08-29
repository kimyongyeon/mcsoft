package com.pcs.heaven.Admin.board;

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

import com.pcs.heaven.Admin.board.Dao.BoardInfoDaoImpl;
import com.pcs.heaven.Admin.boardManage.Dao.BoardManageInfoDaoImpl;
import com.pcs.heaven.Common.Session.UserSession;
import com.pcs.heaven.Common.upload.UploadFile;
import com.pcs.heaven.Common.upload.UploadFileUtil;
import com.pcs.heaven.Common.util.CommonUtil;
import com.pcs.heaven.Model.CheckArray;
import com.pcs.heaven.Param.RequestParam;

@Controller
public class AdminBoardController {
	
        private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());
		
        @Resource(name="boardInfoDaoImpl")
        private BoardInfoDaoImpl boardInfoDaoImpl;
        @Resource(name="boardManageInfoDaoImpl")
        private BoardManageInfoDaoImpl boardManageInfoDaoImpl;
        
        private int BOARD_DEFAULT_ROW_CNT = 10;
        
        /**
         * 목록
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
	@RequestMapping(value="/admin/board/List")
	public ModelAndView list(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

	        String strAction = "/Admin/board/List";
	        ModelAndView mav = new ModelAndView(strAction);
	        
	        /**
	         * 검색관련
	         */
	       
	        
	        int intStart = 0;
	        int intCurrentPage = 1;
	        
            try {
            	intCurrentPage = Integer.parseInt(String.valueOf(reqMap.get("current_page")));
            	if(intCurrentPage < 1) {
            		intCurrentPage = 1;
            	}
                intStart = (intCurrentPage-1)*BOARD_DEFAULT_ROW_CNT;
            } catch (Exception e) {
            	intStart = 0;
            	intCurrentPage = 1;
            }
            
            
            reqMap.set("start_num", intStart);
            reqMap.set("page_row", BOARD_DEFAULT_ROW_CNT);
            List<Map> list = this.boardInfoDaoImpl.getList(reqMap.getParameter());		
            
            HashMap cntMap= this.boardInfoDaoImpl.getCount(reqMap.getParameter());
    		int intTotalCnt = Integer.parseInt(String.valueOf(cntMap.get("cnt")));
            
    		/**
    		 * 총 페이지 계산
    		 */
    		HashMap<String, Object> pageMap = CommonUtil.calcPage(BOARD_DEFAULT_ROW_CNT, intTotalCnt);
    		
            mav.addObject("list", list);
            mav.addObject("manage_seq", reqMap.get("manage_seq"));
            mav.addObject("current_page", intCurrentPage);
    		mav.addObject("total_page", pageMap.get("TOT_PAGE"));
    		mav.addObject("total_count", pageMap.get("intTotalCnt"));
    		
    		
    		
    		mav.addObject("search_type", reqMap.get("search_type"));
    		mav.addObject("search_word", reqMap.get("search_word"));
            
            
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
	@RequestMapping(value="/admin/board/Form")
        public ModelAndView form(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/board/Form";
                ModelAndView mav = new ModelAndView(strAction);
                mav.addObject("manage_seq", reqMap.get("manage_seq"));      
                
                mav.addObject("search_type", reqMap.get("search_type"));
        		mav.addObject("search_word", reqMap.get("search_word"));
        		
        		/**
        		 * boardManage 의 세팅값을 가져온다.
        		 */        		
        		HashMap<String, Object> manageInfo = boardManageInfoDaoImpl.getInfo(reqMap.getParameter());
        		mav.addObject("manageInfo", manageInfo);
        		
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
        @RequestMapping(value="/admin/board/Info")
        public ModelAndView info(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/board/Info";
                ModelAndView mav = new ModelAndView(strAction);                                        
                HashMap hm = this.boardInfoDaoImpl.getInfo(reqMap.getParameter());
                List<Map> filelist = this.boardInfoDaoImpl.getFileList(reqMap.getParameter());
                
                mav.addObject("info", hm);
                mav.addObject("filelist", filelist);
                
                mav.addObject("search_type", reqMap.get("search_type"));
        		mav.addObject("search_word", reqMap.get("search_word"));
        		
        		/**
        		 * boardManage 의 세팅값을 가져온다.
        		 */        		
        		HashMap<String, Object> manageInfo = boardManageInfoDaoImpl.getInfo(reqMap.getParameter());
        		mav.addObject("manageInfo", manageInfo);
        		
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
        @RequestMapping(value="/admin/board/Insert")
        public ModelAndView insertInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, @ModelAttribute("uploadForm") UploadFile uploadfile) {

                String strAction = "redirect:/admin/board/List.do?manage_seq="+reqMap.get("manage_seq");
                ModelAndView mav = new ModelAndView(strAction);
                
                UserSession userSession = (UserSession)request.getSession().getAttribute("USER_SESSION");
                
                
                HashMap hm = this.boardInfoDaoImpl.getNext(reqMap.getParameter());
                
                if(hm != null && hm.size() > 0) {
                    String strCnt = String.valueOf(hm.get("next_seq"));
                    reqMap.set("board_seq", strCnt);
                    reqMap.set("board_writer", userSession.getUser_id());
                    reqMap.set("board_view_count", "0");
                    
                    this.boardInfoDaoImpl.insertInfoBoard(reqMap.getParameter());
                    
                    System.out.println("================= file start ======================");
                    try {
                    	String strType = "IMG_FILE_ROOT";
                    	List<HashMap<String, Object>> fileList = new ArrayList<HashMap<String, Object>>(); 
                    	UploadFileUtil utf = new UploadFileUtil();
                    	fileList = utf.FileUpload(uploadfile, strType);
                    	
                    	if(fileList != null && fileList.size() > 0) {
                    		HashMap fileM= this.boardInfoDaoImpl.getFileNext(reqMap.getParameter());
                    		int intFileSeq = Integer.parseInt(String.valueOf(fileM.get("next_seq")));
                    		
                    		for(int i=0; i<fileList.size(); i++) {
                    			HashMap<String, Object> fileMap = new HashMap<String, Object>();
                    			fileMap = fileList.get(i);
                    			fileMap.put("attach_seq", intFileSeq);
                    			fileMap.put("board_seq", strCnt);
                    			fileMap.put("attach_writer", userSession.getUser_id());
                    			
                    			this.boardInfoDaoImpl.insertInfoBoardFile(fileMap);
                    			
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
        @RequestMapping(value="/admin/board/Update")
        public ModelAndView updateInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, @ModelAttribute("uploadForm") UploadFile uploadfile, @ModelAttribute("delImgNo") CheckArray checkArray) {
        	
        		String strAction = "redirect:/admin/board/List.do?manage_seq="+reqMap.get("manage_seq");
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.boardInfoDaoImpl.updateInfoBoard(reqMap.getParameter());
                UserSession userSession = (UserSession)request.getSession().getAttribute("USER_SESSION");
                
                System.out.println("================= file start ======================");
                try {
                	String strType = "IMG_FILE_ROOT";
                	List<HashMap<String, Object>> fileList = new ArrayList<HashMap<String, Object>>(); 
                	UploadFileUtil utf = new UploadFileUtil();
                	fileList = utf.FileUpload(uploadfile, strType);
                	
                	if(fileList != null && fileList.size() > 0) {
                		HashMap fileM= this.boardInfoDaoImpl.getFileNext(reqMap.getParameter());
                		int intFileSeq = Integer.parseInt(String.valueOf(fileM.get("next_seq")));
                		
                		for(int i=0; i<fileList.size(); i++) {
                			HashMap<String, Object> fileMap = new HashMap<String, Object>();
                			fileMap = fileList.get(i);
                			fileMap.put("attach_seq", intFileSeq);
                			fileMap.put("board_seq", reqMap.get("board_seq"));
                			fileMap.put("attach_writer", userSession.getUser_id());
                			
                			this.boardInfoDaoImpl.insertInfoBoardFile(fileMap);
                			
                			intFileSeq++;
                		}
                	}
                	
                } catch(Exception e) {
                	
                }
                System.out.println("================= file end ======================");
                
                
                /**
                 * 파일관련 삭제
                 */
                
                List delFileList = checkArray.getDelImgNo();                
                if(delFileList !=null && delFileList.size() > 0) {
                	for(int i=0; i<delFileList.size(); i++) {
                		HashMap hm = new HashMap();
                		hm.put("board_seq", reqMap.get("board_seq"));
                		hm.put("attach_seq", delFileList.get(i));
                		
                		this.boardInfoDaoImpl.deleteInfoBoardFile(hm);
                	}
                }
                
                /*String[] arrFileDel = reqMap.get("arr_attach_seq").split(",");
                if(arrFileDel != null && arrFileDel.length > 0) {
                	for(int i=0; i<arrFileDel.length; i++) {
                		HashMap hm = new HashMap();
                		hm.put("board_seq", reqMap.get("board_seq"));
                		hm.put("attach_seq", arrFileDel[i]);
                		
                		this.boardInfoDaoImpl.deleteInfoBoardFile(hm);
                		
                	}
                }*/
                
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
        @RequestMapping(value="/admin/board/Delete")
        public ModelAndView deleteInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/board/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.boardInfoDaoImpl.deleteInfoBoard(reqMap.getParameter());
                
                return mav;
        }
}