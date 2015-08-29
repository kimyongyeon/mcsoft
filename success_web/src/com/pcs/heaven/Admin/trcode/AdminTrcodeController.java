package com.pcs.heaven.Admin.trcode;

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

import com.pcs.heaven.Admin.trcode.Dao.TrcodeInfoDaoImpl;
import com.pcs.heaven.Param.RequestParam;

@Controller
public class AdminTrcodeController {
	
        private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());
		
        @Resource(name="trcodeInfoDaoImpl")
        private TrcodeInfoDaoImpl trcodeInfoDaoImpl;
        
        /**
         * 목록
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
	@RequestMapping(value="/admin/trcode/List")
	public ModelAndView list(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

	        String strAction = "/Admin/trcode/List";
            ModelAndView mav = new ModelAndView(strAction);
            List<Map> list = this.trcodeInfoDaoImpl.getList(reqMap.getParameter());
		
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
	@RequestMapping(value="/admin/trcode/Form")
        public ModelAndView form(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/trcode/Form";
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
        @RequestMapping(value="/admin/trcode/Info")
        public ModelAndView info(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/trcode/Info";
                ModelAndView mav = new ModelAndView(strAction);                                        
                HashMap hm = this.trcodeInfoDaoImpl.getInfo(reqMap.getParameter());
                
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
        @RequestMapping(value="/admin/trcode/Insert")
        public ModelAndView insertInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/trcode/List.do";
                ModelAndView mav = new ModelAndView(strAction);
                
                HashMap hm = this.trcodeInfoDaoImpl.getExist(reqMap.getParameter());
                
                if(hm != null && hm.size() > 0) {
                    String strCnt = String.valueOf(hm.get("cnt"));
                    
                    if(strCnt.equals("0")) {
                    	this.trcodeInfoDaoImpl.insertInfoTrcode(reqMap.getParameter());
                    }
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
        @RequestMapping(value="/admin/trcode/Update")
        public ModelAndView updateInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/trcode/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.trcodeInfoDaoImpl.updateInfoTrcode(reqMap.getParameter());
                
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
        @RequestMapping(value="/admin/trcode/Delete")
        public ModelAndView deleteInfo(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/trcode/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.trcodeInfoDaoImpl.deleteInfoTrcode(reqMap.getParameter());
                
                return mav;
        }
}