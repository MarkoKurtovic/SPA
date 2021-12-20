<?php 

class QueryBuilder{
    protected $db;

    public function __construct($db){


        $this->db= $db;
    }

    public function selectAll($table){


        $sql= "SELECT * FROM {$table}";
        $query= $this->db->prepare($sql);
        $query-> execute();
        return $query->fetchALL(PDO::FETCH_ASSOC);
        
    }


    public function save($data){
        $sql= "INSERT INTO accounts VALUES (NULL, ?,?,?)";
        $query= $this->db->prepare($sql);
        $query-> execute([$data->name,$data->deposit,$data->credit_card]);
        

        if($query){

            return 'succes';
        }else{

            return 'error';
        }
        
    }

    public function update($data){

        $sql= "UPDATE accounts set name= '".$data->name."',deposit='".$data->deposit."', credit_card = '".$data->credit_card."' WHERE id='".$data->id."'";
        $query= $this->db->prepare($sql);
        $query-> execute();
        

        if($query){

            return 'succes';
        }else{

            return 'error';
        }
        
    }

    public function delete($data){

        $sql= "DELETE FROM accounts WHERE id='".$data->id."'";
        $query= $this->db->prepare($sql);
        $query-> execute();
        

        if($query){

            return 'succes';
        }else{

            return 'error';
        }
        
    }
}

?>