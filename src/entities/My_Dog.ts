import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("dogs")
  class Dog {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    breed: string;

    @Column()
    image: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    //quando criamos um dog seu id vem undefined ou null
    constructor(){
      if(!this.id){
        this.id = uuid();
      }
    }
  }

  export  { Dog };