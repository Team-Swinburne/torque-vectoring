#INFOFILE1.1 - Do not remove this line!
FileIdent = CarMaker-TestSeries 10
FileCreator = CarMaker 10.1
Description:
	TestAutomation to test the influence of the weight of the driver (Named Value Driver_wt) on the acceleration.
LastChange = 2021-09-27 09:07:20 alm
StartTime = 2020-11-25 18:30:28
EndTime = 2020-11-25 18:30:35
ReportTemplate =
Step.0 = Settings
Step.0.Name = Global Settings
Step.1 = TestRun
Step.1.Name = Tutorial/Acceleration_TestManager
Step.1.Param.0 = Driver_Wt NValue
Step.1.Char.0.Name = Throttle change to 80%
Step.1.Char.0.Description:
Step.1.Char.0.Identifier = Time
Step.1.Char.0.Unit =
Step.1.Char.0.Param.0 = RTexpr {DM.ManTime >=4 ? DM.Gas= 0.8}
Step.1.Char.0.Param.1 = RTexpr {first() ? Qu::AccTime=0}
Step.1.Char.0.Param.2 = RTexpr {first (Car.Road.sRoad>=75) ? AccTime = DM.ManTime}
Step.1.Crit.0.Name = Acceleration Time
Step.1.Crit.0.Description:
Step.1.Crit.0.Good = [get AccTime] <= 6.9
Step.1.Crit.0.Warn = [get AccTime] > 6.9 && [get AccTime] <= 6.95
Step.1.Crit.0.Bad = [get AccTime] > 6.95
Step.1.Diag.0.Name = Longitudinal Acceleration Vs Time
Step.1.Diag.0.Type = Line Diagram
Step.1.Diag.0.Mode = Quantity vs Time
Step.1.Diag.0.VarOpt = 1
Step.1.Diag.0.Grid = None
Step.1.Diag.0.NAxes = 1
Step.1.Diag.0.RefFile =
Step.1.Diag.0.Pic = SimOutput/ws-soleng002/20201125/diagrams/Tutorial_Acceleration_TestManager_183033_2-8.png
Step.1.Diag.0.Param1.0 = Auto {} {} Time
Step.1.Diag.0.Param1.1 = Auto {} {} LongAcc
Step.1.Diag.0.Param2.0 = Time {} {} {}
Step.1.Diag.0.Param2.1 = Car.ax {} {} {}
Step.1.Diag.0.Param3.0 = {} {} {} {}
Step.1.Diag.0.Param3.1 = {} {} {} {}
Step.1.Diag.0.Param3.2 = {} {} {} {}
Step.1.Var.0.Name = Variation 0
Step.1.Var.0.Param = 70
Step.1.Var.0.Result = good
Step.1.Var.0.ResDate = 1606325430
Step.1.Var.0.ResFiles = SimOutput/ws-soleng002/20201125/Tutorial_Acceleration_TestManager_183029.erg
Step.1.Var.0.ManLst = 0
Step.1.Var.0.Char.0.Name = Time
Step.1.Var.0.Char.0.Value = 7.163000000000727
Step.1.Var.0.Crit.0.Name = Acceleration Time
Step.1.Var.0.Crit.0.Result = good
Step.1.Var.0.Diag.0.Pic =
Step.1.Var.1.Name = Variation 1
Step.1.Var.1.Param = 85
Step.1.Var.1.Result = warn
Step.1.Var.1.ResDate = 1606325433
Step.1.Var.1.ResFiles = SimOutput/ws-soleng002/20201125/Tutorial_Acceleration_TestManager_183031.erg
Step.1.Var.1.ManLst = 0
Step.1.Var.1.Char.0.Name = Time
Step.1.Var.1.Char.0.Value = 7.224000000000747
Step.1.Var.1.Crit.0.Name = Acceleration Time
Step.1.Var.1.Crit.0.Result = warn
Step.1.Var.1.Diag.0.Pic =
Step.1.Var.2.Name = Variation 2
Step.1.Var.2.Param = 100
Step.1.Var.2.Result = bad
Step.1.Var.2.ResDate = 1606325435
Step.1.Var.2.ResFiles = SimOutput/ws-soleng002/20201125/Tutorial_Acceleration_TestManager_183033.erg
Step.1.Var.2.ManLst = 0
Step.1.Var.2.Char.0.Name = Time
Step.1.Var.2.Char.0.Value = 7.283000000000767
Step.1.Var.2.Crit.0.Name = Acceleration Time
Step.1.Var.2.Crit.0.Result = bad
Step.1.Var.2.Diag.0.Pic =
