package com.pcs.heaven.Admin.menu;

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

import com.pcs.heaven.Admin.menu.Dao.MenuInfoDaoImpl;
import com.pcs.heaven.Param.RequestParam;

@Controller
public class AdminMenuController {
	
        private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());
		
        @Resource(name="menuInfoDaoImpl")
        private MenuInfoDaoImpl menuInfoDaoImpl;
        
        /**
         * 메뉴 목록
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
	@RequestMapping(value="/admin/menu/List")
	public ModelAndView menuMainList(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

	        String strAction = "/Admin/menu/List";
                ModelAndView mav = new ModelAndView(strAction);
		List<Map> list = this.menuInfoDaoImpl.getMenuMainList(reqMap.getParameter());
		
		mav.addObject("main_menu_list", list);
		        
		return mav;
	}
	
	/**
	 * 메뉴 등록폼
	 * @param reqMap
	 * @param model
	 * @param request
	 * @param response
	 * @param handler
	 * @return
	 */
	@RequestMapping(value="/admin/menu/Form")
        public ModelAndView menuMainForm(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/menu/Form";
                ModelAndView mav = new ModelAndView(strAction);
                                        
                return mav;
        }


	/**
	 * 메뉴 정보
	 * @param reqMap
	 * @param model
	 * @param request
	 * @param response
	 * @param handler
	 * @return
	 */
        @RequestMapping(value="/admin/menu/Info")
        public ModelAndView menuMainView(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/menu/Info";
                ModelAndView mav = new ModelAndView(strAction);                                        
                HashMap hm = this.menuInfoDaoImpl.getMenuMainInfo(reqMap.getParameter());
                
                mav.addObject("main_menu_info", hm);
                
                return mav;
        }
        
        /**
         * 메뉴 등록
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/menu/Insert")
        public ModelAndView menuMainInsert(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/menu/List.do";
                ModelAndView mav = new ModelAndView(strAction);
                
                HashMap hm = this.menuInfoDaoImpl.getMenuMainNextCd(reqMap.getParameter());
                
                if(hm != null && hm.size() > 0) {
                    String strNextCd = String.valueOf(hm.get("nextcd"));
                    reqMap.set("main_menu_cd", strNextCd);
                    this.menuInfoDaoImpl.insertInfoMenuMain(reqMap.getParameter());
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
        @RequestMapping(value="/admin/menu/Update")
        public ModelAndView menuMainUpdate(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/menu/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.menuInfoDaoImpl.updateInfoMenuMain(reqMap.getParameter());
                
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
        @RequestMapping(value="/admin/menu/Delete")
        public ModelAndView menuMainDelete(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/menu/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.menuInfoDaoImpl.deleteInfoMenuMain(reqMap.getParameter());
                
                return mav;
        }
}