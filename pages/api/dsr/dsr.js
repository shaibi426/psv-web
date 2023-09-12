import db from "../../../db";

export default async function handler(req, res) {

  let result = []
  if (req.method === "GET") {
    const qry1 = `select count(*) as dvr_night_shift1,KM from DriverInfo where AddedON >CAST( GETDATE()-1 AS date)and cast(cast(AddedON as time) as varchar(5)) >'22:00'and cast(cast(AddedON as time) as varchar(5)) <'23:59' group by KM`;
    const qry2 = `select count(*) as dvr_night_shift2,KM from DriverInfo where AddedON >CAST( GETDATE()-1 AS date)and AddedON <CAST( GETDATE() AS date)and cast(cast(AddedON as time) as varchar(5)) >'00:00'  and cast(cast(AddedON as time) as varchar(5)) <'06:00' group by KM`;
    const qry3 = `select count(*) as dvr_first_shift ,KM from DriverInfo where AddedON >CAST( GETDATE()-1 AS date)and AddedON <CAST( GETDATE() AS date)and cast(cast(AddedON as time) as varchar(5)) >'06:00'and cast(cast(AddedON as time) as varchar(5)) <'14:00' group by KM`;
    const qry4 = `select count(*) as dvr_second_shift,KM from DriverInfo where AddedON >CAST( GETDATE()-1 AS date)and AddedON <CAST( GETDATE() AS date)and cast(cast(AddedON as time) as varchar(5)) >'14:00'and cast(cast(AddedON as time) as varchar(5)) <'22:00' group by KM`;

    const driver_1st = await db.query(qry3);
    const driver_2nd = await db.query(qry4);
    const driver_night1st = await db.query(qry1);
    const driver_night2nd = await db.query(qry2);
    //------------------------------------------vehicles
    const qry5 = `select count(*) as psv_night_shift1,KM , SUM(SeatingCap) as broaded from VehicleInfo where AddedOn >CAST( GETDATE()-1 AS date)and cast(cast(AddedOn as time) as varchar(5)) >'22:00'and cast(cast(AddedOn as time) as varchar(5)) <'23:59' group by KM`
    const qry6 = `select count(*) as psv_night_shift2,KM , SUM(SeatingCap) as broaded from VehicleInfo where AddedOn >CAST( GETDATE()-1 AS date)and AddedOn <CAST( GETDATE() AS date)and cast(cast(AddedOn as time) as varchar(5)) >'00:00'  and cast(cast(AddedOn as time) as varchar(5)) <'06:00' group by KM`
    const qry7 = `select count(*) as psv_first_shift ,KM, SUM(SeatingCap) as broaded from VehicleInfo where AddedOn >CAST( GETDATE()-1 AS date)and AddedOn <CAST( GETDATE() AS date)and cast(cast(AddedOn as time) as varchar(5)) >'06:00'and cast(cast(AddedOn as time) as varchar(5)) <'14:00' group by KM`
    const qry8 = `select count(*) as psv_second_shift ,KM, SUM(SeatingCap) as broaded from VehicleInfo where AddedOn >CAST( GETDATE()-1 AS date)and AddedOn <CAST( GETDATE() AS date)and cast(cast(AddedOn as time) as varchar(5)) >'14:00'and cast(cast(AddedOn as time) as varchar(5)) <'22:00' group by KM`

    const vehicle_1st = await db.query(qry7);
    const vehicle_2nd = await db.query(qry8);
    const vehicle_night1st = await db.query(qry5);
    const vehicle_night2nd = await db.query(qry6);

    //---------------------------------------------------------final report data
    const qry9 =`SELECT  count(iIF(ReportStatus != 0,
      CASE
      WHEN ReportStatus = 1 THEN 'road worthy'
      WHEN ReportStatus = 2 THEN 'warned'
      WHEN ReportStatus = 3 THEN 'returned'
      WHEN ReportStatus = 4 THEN 'enforced'
      END
      ,'n/a')) as total, iIF(ReportStatus != 0,
      CASE
      WHEN ReportStatus = 1 THEN 'road worthy'
      WHEN ReportStatus = 2 THEN 'warned'
      WHEN ReportStatus = 3 THEN 'returned'
      WHEN ReportStatus = 4 THEN 'enforced'
      END
      ,'n/a') as  status,KM,count(*) as travveled FROM FinalReport  where AddedOn >CAST( GETDATE()-1 AS date)and AddedOn <CAST( GETDATE() AS date)and cast(cast(AddedOn as time) as varchar(5)) >'06:00'and cast(cast(AddedOn as time) as varchar(5)) <'14:00' GROUP BY iIF(ReportStatus != 0,
      CASE
      WHEN ReportStatus = 1 THEN 'road worthy'
      WHEN ReportStatus = 2 THEN 'warned'
      WHEN ReportStatus = 3 THEN 'returned'
      WHEN ReportStatus = 4 THEN 'enforced'
      END
      ,'n/a') ,KM`

      const qry10 =`SELECT  count(iIF(ReportStatus != 0,
        CASE
        WHEN ReportStatus = 1 THEN 'road worthy'
        WHEN ReportStatus = 2 THEN 'warned'
        WHEN ReportStatus = 3 THEN 'returned'
        WHEN ReportStatus = 4 THEN 'enforced'
        END
        ,'n/a')) as total, iIF(ReportStatus != 0,
        CASE
        WHEN ReportStatus = 1 THEN 'road worthy'
        WHEN ReportStatus = 2 THEN 'warned'
        WHEN ReportStatus = 3 THEN 'returned'
        WHEN ReportStatus = 4 THEN 'enforced'
        END
        ,'n/a') as  status,KM,count(*) as travveled FROM FinalReport  where AddedOn >CAST( GETDATE()-1 AS date)and AddedOn <CAST( GETDATE() AS date)and cast(cast(AddedOn as time) as varchar(5)) >'14:00'and cast(cast(AddedOn as time) as varchar(5)) <'22:00' GROUP BY iIF(ReportStatus != 0,
        CASE
        WHEN ReportStatus = 1 THEN 'road worthy'
        WHEN ReportStatus = 2 THEN 'warned'
        WHEN ReportStatus = 3 THEN 'returned'
        WHEN ReportStatus = 4 THEN 'enforced'
        END
        ,'n/a') ,KM`
        const qry11 =`SELECT  count(iIF(ReportStatus != 0,
          CASE
          WHEN ReportStatus = 1 THEN 'road worthy'
          WHEN ReportStatus = 2 THEN 'warned'
          WHEN ReportStatus = 3 THEN 'returned'
          WHEN ReportStatus = 4 THEN 'enforced'
          END
          ,'n/a')) as total, iIF(ReportStatus != 0,
          CASE
          WHEN ReportStatus = 1 THEN 'road worthy'
          WHEN ReportStatus = 2 THEN 'warned'
          WHEN ReportStatus = 3 THEN 'returned'
          WHEN ReportStatus = 4 THEN 'enforced'
          END
          ,'n/a') as  status,KM,count(*) as travveled FROM FinalReport  where AddedOn >CAST( GETDATE()-1 AS date)and AddedOn <CAST( GETDATE() AS date)and cast(cast(AddedOn as time) as varchar(5)) >'22:00'and cast(cast(AddedOn as time) as varchar(5)) <'00:00' GROUP BY iIF(ReportStatus != 0,
          CASE
          WHEN ReportStatus = 1 THEN 'road worthy'
          WHEN ReportStatus = 2 THEN 'warned'
          WHEN ReportStatus = 3 THEN 'returned'
          WHEN ReportStatus = 4 THEN 'enforced'
          END
          ,'n/a') ,KM`
          const qry12 =`SELECT  count(iIF(ReportStatus != 0,
            CASE
            WHEN ReportStatus = 1 THEN 'road worthy'
            WHEN ReportStatus = 2 THEN 'warned'
            WHEN ReportStatus = 3 THEN 'returned'
            WHEN ReportStatus = 4 THEN 'enforced'
            END
            ,'n/a')) as total, iIF(ReportStatus != 0,
            CASE
            WHEN ReportStatus = 1 THEN 'road worthy'
            WHEN ReportStatus = 2 THEN 'warned'
            WHEN ReportStatus = 3 THEN 'returned'
            WHEN ReportStatus = 4 THEN 'enforced'
            END
            ,'n/a') as  status,KM,count(*) as travveled FROM FinalReport  where  AddedOn <CAST( GETDATE() AS date)and cast(cast(AddedOn as time) as varchar(5)) >'00:00'and cast(cast(AddedOn as time) as varchar(5)) <'06:00' GROUP BY iIF(ReportStatus != 0,
            CASE
            WHEN ReportStatus = 1 THEN 'road worthy'
            WHEN ReportStatus = 2 THEN 'warned'
            WHEN ReportStatus = 3 THEN 'returned'
            WHEN ReportStatus = 4 THEN 'enforced'
            END
            ,'n/a') ,KM`
      
    
  



      const final_1st = await db.query(qry9);
       const final_2nd = await db.query(qry10);
       const final_3rd1 = await db.query(qry11);
       const final_3rd2 = await db.query(qry12);

//------------------------------------------------------------------------------
    result.push(
      {firstShift:[ driver_1st.recordset,vehicle_1st.recordset,final_1st.recordset],
      secondShift:[ driver_2nd.recordset,vehicle_2nd.recordset,final_2nd .recordset],
      nightShift1:[ driver_night1st.recordset,vehicle_night1st.recordset,final_3rd1.recordset],
      nightShift2:[  driver_night2nd.recordset,vehicle_night2nd.recordset,final_3rd2.recordset]}
    )
    // result.push(
    // [ driver_1st.recordset,vehicle_1st.recordset,final_1st.recordset],
    //  [ driver_2nd.recordset,vehicle_2nd.recordset,final_2nd .recordset],
    //   [ driver_night1st.recordset,vehicle_night1st.recordset,final_3rd1.recordset],
    //   [  driver_night2nd.recordset,vehicle_night2nd.recordset,final_3rd2.recordset]
    // )
  

    res.status(200).json(result);
  }
}



