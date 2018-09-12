using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using gerencia.Models;
using gerencia.ACC_Datos;

namespace gerencia.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        
        public ActionResult registro()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Logueo(usuarios usuario) 
        {
           ACCDATOS acd=new ACCDATOS();
           usuarios usua = acd.logueo(usuario);
           string resu = "no existe";
            if (usua != null)
            {
                Session["Idusuario"] = usua.id_usuario;
                Session["Nusuario"] = usua.nombre_usuario;
                resu = "admin";
            }
            return Json(resu,JsonRequestBehavior.AllowGet);
        }
        
        [HttpPost]
        public JsonResult registro(usuarios usuario)
        {
            ACCDATOS acd = new ACCDATOS();
            var a = acd.ADD_usuario(usuario);
            return Json(a, JsonRequestBehavior.AllowGet);
        }

        public ActionResult CerrarSesion()
        {
            Session.Clear();
            Session.Abandon();
            return RedirectToAction("Index", "Login");
        }

    }
}