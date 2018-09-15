using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using gerencia.Models;
using gerencia.ACC_Datos;

namespace gerencia.Controllers
{
    public class adminController : Controller
    {
        // GET: admin
        public ActionResult Index()
        {

            return View();
        }


        public ActionResult Empleado()
        {
            empresaEntities emp = new empresaEntities();
            List<empleados> empl = emp.empleados.ToList();

            return PartialView("View", empl);
        }
        [HttpPost]
       public JsonResult Add(empleados emp)
        {
            ACCDATOS acd = new ACCDATOS();
            var a = acd.ADD_empleado(emp);
            return Json(a, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetbyID(int ID)
        {
            empresaEntities bd = new empresaEntities();
            var Empleado = bd.empleados.Find(ID);
            return Json(Empleado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Update(empleados emp)
        {
            ACCDATOS acd = new ACCDATOS();
            return Json(acd.UpdateE(emp), JsonRequestBehavior.AllowGet);
        }


        public JsonResult Delete(int ID)
        {
            empresaEntities bd = new empresaEntities();
            empleados e = bd.empleados.Find(ID);
            var t = bd.empleados.Remove(e);
            bd.SaveChanges();
            return Json(t, JsonRequestBehavior.AllowGet);
        }
    }
}