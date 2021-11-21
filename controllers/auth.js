const { json } = require("express");
const mysql = require("mysql");

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookingtable'
});

exports.data = async (req, res) =>{

    try{
      const obj = JSON.parse(JSON.stringify(req.body));
      const obj2 = (JSON.parse(obj.date));

      const exp_num = obj2.expnum;
      const time = obj2.time;

      conn.query('INSERT INTO booking SET ?', {expnum:exp_num, dates:time}, (error, results) => {
                    if(error) {
                      console.log(error);
                    } else {
                      console.log("Data Inserted");
                    }
              })
    }
    catch(error){
      console.error(error);
    }
  }
  
  exports.delete = async (req, res) =>{

    try{
      const obj = JSON.parse(JSON.stringify(req.body));
      const obj2 = (JSON.parse(obj.date));

      const exp_num = obj2.expnum;
      const time = obj2.time;
      
      var sql = "DELETE FROM booking WHERE expnum = ? and dates = ? ";

      await conn.query(sql,[exp_num,time],(err,result)=>{
        if(err){
          console.error(err)
        }else{
          console.log("DELETED")
        }
      });

    }
    catch(error){
      console.error(error);
    }
  }
  