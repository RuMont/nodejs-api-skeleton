import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Note } from './note';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Note, (note) => note.products)
    @JoinColumn({name: "noteId"})
    note: Note

    @Column({
        nullable: false
    }) // Tapas de vidrio cosas así, se convertirá en una fk seguramente
    // Ver typeorm adjacency list y closure tables
    type: string

    @Column("double", {
        unsigned: true,
        nullable: false
    })
    widthInCm: number

    @Column("double", {
        unsigned: true,
        nullable: false
    })
    heightInCm: number

    @Column("double", {
        unsigned: true,
        nullable: false
    })
    areaInM2: number
}