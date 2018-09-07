using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Services;

namespace WebAp.Controllers
{
    public class doLoginController : ApiController
    {
        //public Dictionary<string, object> POST(FormCollection formcollection)
        //{
        //    /*
        //      d.ac = loginModalAccountInput.val().trim();
        //        d.pw = loginModalPasswordInput.val().trim();
        //        d._token = $("meta[name='_token']").attr('content');
        //     */

        //    /*
        //     oJson.status) {
        //                    alertify.success(Lang[oJson.msg]
        //     */

        //    Dictionary<string, object> DicQry = new Dictionary<string, object>();
        //    DicQry.Add("status", true);
        //    DicQry.Add("msg", "login_ok_msg");

        //    return DicQry;
        //}
        
        public Dictionary<string, object> POST(string ac, string pw)
        {
            /*
              d.ac = loginModalAccountInput.val().trim();
                d.pw = loginModalPasswordInput.val().trim();
                d._token = $("meta[name='_token']").attr('content');
             */

            /*
             oJson.status) {
                            alertify.success(Lang[oJson.msg]
             */

            Dictionary<string, object> DicQry = new Dictionary<string, object>();
            DicQry.Add("status", true);
            DicQry.Add("msg", "login_ok_msg");

            return DicQry;
        }
        
        //public HttpResponseMessage POST(string ac, string pw)
        //{
        //    /*
        //      d.ac = loginModalAccountInput.val().trim();
        //        d.pw = loginModalPasswordInput.val().trim();
        //        d._token = $("meta[name='_token']").attr('content');
        //     */

        //    /*
        //     oJson.status) {
        //                    alertify.success(Lang[oJson.msg]
        //     */

        //    Dictionary<string, object> DicQry = new Dictionary<string, object>();
        //    DicQry.Add("status", true);
        //    DicQry.Add("msg", "login_ok_msg");

        //    return Request.CreateResponse(HttpStatusCode.OK, DicQry);
        //}

        // GET: api/doLogin
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/doLogin/5
        public string Get(int id)
        {
            return "value";
        }

        // PUT: api/doLogin/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/doLogin/5
        public void Delete(int id)
        {
        }
    }
}
