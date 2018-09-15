using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using gerencia.Models;

namespace gerencia.ACC_Datos
{
    public class ACCDATOS
    {

        public string ADD_usuario(usuarios usuario)
        {
            using (empresaEntities empresa = new empresaEntities())
            {
                var id = empresa.usuarios.Any(e => e.id_usuario == usuario.id_usuario);
                if (id)
                {
                    return "ya existe";
                }
                else
                {
                    empresa.usuarios.Add(usuario);
                    empresa.SaveChanges();
                    return "Save";

                }
            }
        }

        public usuarios logueo(usuarios usuario)
        {
            using (empresaEntities empresa = new empresaEntities())
            {
                usuarios u = empresa.usuarios.SingleOrDefault(x => x.email_usuario == usuario.email_usuario && x.clave_usuario == usuario.clave_usuario);
              
                return u;
            }

        }


        public string ADD_empleado(empleados emp)
        {
            using (empresaEntities empresa = new empresaEntities())
            {
                var id = empresa.empleados.Any(e => e.EmpleadoID == emp.EmpleadoID);
                if (id)
                {
                    return "ya existe";
                }
                else
                {
                    empresa.empleados.Add(emp);
                    empresa.SaveChanges();
                    return "Save";

                }
            }
        }

        public int UpdateE(empleados em)
        {

            empresaEntities bd = new empresaEntities();
            empleados an = bd.empleados.Find(em.EmpleadoID);
            an.Nombre = em.Nombre;
            an.Edad = em.Edad;
            an.Estado = em.Estado;
            an.Pais = em.Pais;
            bd.SaveChanges();

            return 1;
        }




    }
}