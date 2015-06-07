name := "zentasks"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  javaJdbc,
  javaEbean,
  cache,
  "mysql" % "mysql-connector-java" % "5.1.18",
  "com.google.code.gson" % "gson" % "2.2.4"
)     

play.Project.playJavaSettings
