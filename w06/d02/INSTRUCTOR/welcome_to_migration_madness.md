
# Welcome to Migration Madness

`rails new migration_madness -d postgresql`

1. Create a teams table with attributes of name, location. Create the corresponding model file (team.rb)

2. Create a players table with attributes of name(string), sneaker_type(string), sneaker_name(string), bio(string) and the relationship to teams column. 
3. Create a coaches table with attributes of name, and coach_type

4. We realize that bio should be a datatype of *text* instead of *string*
    * Change the bio data-type from string to text. 

    ```
    class ChangeType < ActiveRecord::Migration
      def change
        reversible do |dir|
          change_table :players do |t|
            dir.up   { t.change :bio, :text }
            dir.down { t.change :bio, :string }
          end
        # change_table works but is non reversible when running rake db:rollback
        # change_table :players do |t|
        #   t.change :sneaker_type, :text
        # end
        end
      end
    end
    ```

5. We learned about database normalization. Sneakers are not normalized! We will have repeating rows of sneaker information. Let's create a sneakers table and set up the relationship. 
    * remove the sneaker_type and sneaker_name columns
    * create the sneakers table with name, type, player reference

    ```
    # rails g migration create_sneakers name:string sneaker_type:string player:references
    
      def change
        create_table :sneakers do |t|
          t.string :name
          t.string :sneaker_type
          t.references :player, index: true
          t.timestamps
        end
      end
      
    ```
    * remove the sneaker_name and sneaker_type columns from the players table
    
    ```
    # rails g migration RemoveDetailsFromPlayers sneaker_name:string sneaker_type:string
    class RemoveDetailsFromPlayers < ActiveRecord::Migration
      def change
        remove_column :players, :sneaker_name, :string
        remove_column :players, :sneaker_type, :string
      end
    end
    ```

6. Set up the many to many relationship for coaches and players along with the corresponding join table. 
    * Create a Join table for coaches_players
    * Update the models to correctly represent the relationships

    ```
    class CreateJoinTableCoachesPlayers < ActiveRecord::Migration
      def change
        create_table :coaches_players, id: false do |t|
          t.references :coach, null: false
          t.references :player, null: false
        end
        # create_join_table :coaches, :players do |t|
        # end
      end
    end
    ```

7. What! You suddenly realize that this really should be a has many through association! Coaches will **only** have players through *teams* AND Players will **only** have coaches through *teams*
    * Delete the joiner table
    
    ```
    class DropJoinTableCoachesPlayers < ActiveRecord::Migration
      def change
        drop_join_table :coaches, :players
         
        # works but is non reversible (rake db:rollback will give you an error)
        # drop_table :coaches_players
      end
        
    end
    ```
    * Add the references to team table
    
    ```
    # rails g migration AddReferencesToTeams coach:references player:references
    class AddReferencesToTeams < ActiveRecord::Migration
      def change
        add_reference :teams, :coach, index: true
        add_reference :teams, :player, index: true
      end
    end
    ```

    * Update the models to correctly represent the relationships
    
8. Oh nooOooo.. Actually.. this shouldn't have been a has many through association because the team names and locations are being duplicated.. The joiner table that we had earlier is more appropriate after all..
    * Create three migrations that correct the past three migrations to go back to the preferred state where we created the joiner table.
    * `rake db:rollback STEP=2`

`Summary: the importance of domain modeling and not having to deal with such a mess of migrations due to poor planning prior to starting your code project`

