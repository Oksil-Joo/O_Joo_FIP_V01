<?php
    $result = array();

    function getOneProfs($conn, $prof) {
   
        $query = "SELECT * FROM profs WHERE id='".$prof."'";

    $runQuery = $conn->query($query);


    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
     $result[] = $row;
    }

    return $result;
}
  
    function getAllprofs($conn) {
   
            $query = "SELECT * FROM profs";


        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }