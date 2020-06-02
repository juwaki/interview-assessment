using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using InterviewTest.Models;
using Microsoft.AspNetCore.Localization;
using System.ComponentModel;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System.Runtime.InteropServices.ComTypes;
using Remotion.Linq.Parsing.Structure.IntermediateModel;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace InterviewTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroesController : ControllerBase
    {
        public Hero[] heroes = new Hero[] {
               new Hero()
               {
                   name= "Hulk",
                   power="Strength from gamma radiation",
                   stats=
                   new List<KeyValuePair<string, int>>()
                   {
                       new KeyValuePair<string, int>( "strength", 5000 ),
                       new KeyValuePair<string, int>( "intelligence", 50),
                       new KeyValuePair<string, int>( "stamina", 2500 )
                   }
               }
            };

        // GET: api/Heroes
        [HttpGet]
        public IEnumerable<Hero> Get()
        {
            return this.heroes;
        }

        // GET: api/Heroes/5
        [HttpGet("{id}", Name = "Get")]
        public Hero Get(int id)
        {
            return this.heroes.FirstOrDefault();
        }

        // POST: api/Heroes
        [HttpPost]
        public List<int> Post(string action = "evolve")
        {
            if (action == "evolve")
            {

                Hero hero = new Hero();
                List<int> heroUpdated = new List<int>();



                foreach (var key in this.heroes)
                {
                    // Int 
                   
                    //hero.evolve(key.stats[key]);


                    for (int x = 0; x < key.stats.Count; x++)
                    {
                        Console.Write(key.stats[x].Value);
                        hero.evolve(key.stats[x].Value);

                        heroUpdated.Add(hero.evolve(key.stats[x].Value));

                        

                    }

                }


                return heroUpdated;






            }
            else
            {
                return null;
            }
        }

        // PUT: api/Heroes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
