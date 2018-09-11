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

        public string logueo(usuarios usuario)
        {
            using (empresaEntities empresa = new empresaEntities())
            {
                usuarios u = empresa.usuarios.SingleOrDefault(x => x.email_usuario == usuario.email_usuario && x.clave_usuario == usuario.clave_usuario);
                string resultado = "no existe";
                if (u!= null)
                {
                    resultado = "admin";
                }
                return resultado;
            }

        }


    }
}