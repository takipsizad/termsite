var osu = require('node-os-utils')
var cpu = osu.cpu
cpu.usage()
  .then(cpuPercentage => {
    var cpuper =  cpuPercentage
    console.log(cpuper) //
  })
  var mem = osu.mem
mem.info()
    .then(meminfo => {
      console.log(meminfo)
    })
var cpu = osu.cpu
cpu.free()
  .then(cpufer => {
    console.log(cpufer)
  })