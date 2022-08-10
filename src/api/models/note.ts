import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Client } from "./client";
import { Product } from './product';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Client)
    @JoinColumn()
    client: Client

    @OneToMany(() => Product, (product) => product.note, {
        nullable: false
    })
    @JoinColumn(
        { name: "product_id" }
    )
    products: Product[]

    @Column("smallint", {
        unsigned: true,
        nullable: false
    })
    units: number

    @Column("datetime", {
        nullable: true
    })
    deliveryDate?: Date

    @Column("text")
    comments: string
}