package com.pcs.heaven.Admin;

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
import com.pcs.heaven.Admin.menu.Dao.MenuInfoDaoImpl;
import com.pcs.heaven.Param.RequestParam;

@Controller
public class AdminMainController {
	
	private final Log logger = LogFactory.getLog(AdminMainController.class);
		
	@Resource(name="menuInfoDaoImpl")
    private MenuInfoDaoImpl menuInfoDaoImpl;
	
	@Resource(name="boardManageInfoDaoImpl")
    private BoardManageInfoDaoImpl boardManageInfoDaoImpl;
	
	@RequestMapping(value="/admin/main.do")
	public ModelAndView main(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {
		
		ModelAndView mav = new ModelAndView();
		String strAction = "/Admin/AdminMain";
                mav.setViewName(strAction);
		        
		return mav;
	}
	
	@RequestMapping(value="/admin/include/incAdmTop.do")
        public ModelAndView incAdmTop(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {
                
                String strAction = "/Admin/include/incAdmTop";
                ModelAndView mav = new ModelAndView(strAction);
                List<Map> list = this.menuInfoDaoImpl.getMenuMainList(reqMap.getParameter());
                mav.addObject("main_menu_list", list);
                
                HashMap hm = new HashMap();
                List<Map> boardMenuList = this.boardManageInfoDaoImpl.getBoardMenuList(reqMap.getParameter());
                mav.addObject("main_menu_board", boardMenuList);
                
                return mav;
        }
	
}