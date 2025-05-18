<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';    

const store = useStore()

const categories = ref([
  'Electronics', 'Clothing', 'Home'
]);

// Form model
const newProduct = ref({
  name: '',
  category: '',
  description: '',
  sku: '',
  barcode: '',
  currentStock: 0,
  minStock: 0,
  forecast: 0,
  price: 0,
  cost: 0,
  supplier: '',
  location: '',
  weight: 0,
  status: 'active',
  taxable: true,
  requiresSerial: false,
  lastUpdated: new Date().toISOString().split('T')[0]
});

const products = ref([
  // Your existing inventory data would go here
]);

const resetForm = () => {
  newProduct.value = {
    name: '',
    category: '',
    description: '',
    sku: '',
    barcode: '',
    currentStock: 0,
    minStock: 0,
    forecast: 0,
    price: 0,
    cost: 0,
    supplier: '',
    location: '',
    weight: 0,
    status: 'active',
    taxable: true,
    requiresSerial: false,
    lastUpdated: new Date().toISOString().split('T')[0]
  };
};



const addProduct = () => {
    store.dispatch('addProduct', newProduct.value)
}

</script>
<template>
    <div class="product-registry">
        <h3>Add New Product</h3>
        <form @submit.prevent="addProduct">
        <div class="card-box">
            <div class="card-header">
                <div class="left-sec">
                    <h4>Basic Information</h4>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">Product Name*</label>
                            <input class="form-control" v-model="newProduct.name" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">Category*</label>
                            <select v-model="newProduct.category" class="form-control">
                                <option value="">Select Category</option>
                                <option v-for="cat in categories" :value="cat" :key="cat">{{ cat }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="form-label">Description</label>
                            <textarea class="form-control" v-model="newProduct.description"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-box">
            <div class="card-header">
                <div class="left-sec">
                    <h4>Inventory Details</h4>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-label">SKU*</label>
                            <input class="form-control" v-model="newProduct.sku" required>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-label">Barcode*</label>
                              <input class="form-control" v-model="newProduct.barcode" required>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-label">Current Stock*</label>
                            <input type="number" class="form-control" v-model="newProduct.currentStock" required>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label class="form-label">Min Stock*</label>
                            <input type="number" class="form-control" v-model="newProduct.minStock" required>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label class="form-label">Forecast Demand</label>
                            <input type="number" class="form-control" v-model="newProduct.forecast">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label class="form-label">Price* ($)</label>
                            <input type="number" class="form-control" v-model="newProduct.price" required>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label class="form-label">Cost ($)</label>
                            <input type="number" class="form-control" v-model="newProduct.cost">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-box">
            <div class="card-header">
                <div class="left-sec">
                    <h4>Additional Information</h4>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-label">Supplier</label>
                            <input class="form-control" v-model="newProduct.supplier">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-label">Location in Warehouse</label>
                              <input class="form-control" v-model="newProduct.location">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-label">Weight (kg)</label>
                            <input type="number" class="form-control" v-model="newProduct.weight">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-box">
            <div class="card-header">
                <div class="left-sec">
                    <h4>Product Status</h4>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-label">Supplier</label>
                            <select class="form-control" v-model="newProduct.status">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="discontinued">Discontinued</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group-check">
                            <div class="checkbox-container">
                                <label>
                                    <input v-model="newProduct.taxable" type="checkbox"/>
                                    <span class="checkbox"></span>
                                </label>
                            </div>
                            <span class="form-checklabel">Taxable</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group-check">
                            <div class="checkbox-container">
                                <label>
                                    <input v-model="newProduct.requiresSerial" type="checkbox"/>
                                    <span class="checkbox"></span>
                                </label>
                            </div>
                            <span class="form-checklabel">Requires Serial Number</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-submit">
          <button class="btn btn-secondary" type="button" @click="resetForm">
            Reset
          </button>
          <button class="btn btn-primary" type="submit">
            Add Product
          </button>
        </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
.product-registry{
    h3{
        margin-bottom: 20px;
    }
}
.form-submit{
    text-align: right;
    & > * {
    margin-left: 20px;
}
}
</style>