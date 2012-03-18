<?php
include('config.php');
$db_handle=mysql_connect($db_host, $db_username, $db_password);
$db_found=mysql_select_db($db_name, $db_handle);

$action = $_GET["action"];

switch($action) {
	case "get_tracks":
		$results = mysql_query("SELECT * FROM tracks");
		break;
}
$rows = array();
while($row = mysql_fetch_assoc($results)) {
	$rows[] = $row;
}
print json_encode($rows);
?>