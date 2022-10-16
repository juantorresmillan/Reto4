package co.usar.ciclo3.ciclo3.repository;

import co.usar.ciclo3.ciclo3.model.Category;
import co.usar.ciclo3.ciclo3.repository.crud.CategoryCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CategoryRepository {
    @Autowired
    private CategoryCrudRepository categoryCrudRepository;

    public CategoryRepository(){
    }

    public List<Category> getAll(){

        return (List<Category>) categoryCrudRepository.findAll();
    }
    public Optional<Category> getCategory(int id){

        return categoryCrudRepository.findById(id);
    }

    public Category save(Category cat){

        return categoryCrudRepository.save(cat);
    }

    public void update(Category cat){
        categoryCrudRepository.save(cat);
        
    }
    public void delete(Category cat){
        categoryCrudRepository.delete(cat);
    }
}
