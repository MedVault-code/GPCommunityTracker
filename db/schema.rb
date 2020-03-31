# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_25_162534) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_type", "sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_type_and_sluggable_id"
  end

  create_table "practice_forms", force: :cascade do |t|
    t.bigint "practice_id"
    t.string "first_name"
    t.string "last_name"
    t.date "dob"
    t.string "address_1"
    t.string "address_2"
    t.string "city"
    t.string "county"
    t.string "postcode"
    t.string "country"
    t.string "email"
    t.text "message"
    t.text "symptoms"
    t.string "symptoms_duration"
    t.boolean "recent_travel"
    t.boolean "self_isolating"
    t.text "symptoms_outline"
    t.text "pre_existing_medical_conditions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "severity"
    t.string "ppsn"
    t.string "phone"
    t.boolean "existing_patient"
    t.boolean "healthcare_worker"
    t.boolean "coronavirus_contact"
    t.boolean "risk_group"
    t.boolean "household_risk_group"
    t.boolean "prison_service_worker"
    t.boolean "pregnant"
    t.boolean "care_facility_staff"
    t.index ["practice_id"], name: "index_practice_forms_on_practice_id"
  end

  create_table "practices", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "first_name"
    t.string "last_name"
    t.string "practice_name"
    t.string "practice_phone"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.string "practice_full_name", default: "", null: false
    t.index ["email"], name: "index_practices_on_email", unique: true
    t.index ["reset_password_token"], name: "index_practices_on_reset_password_token", unique: true
    t.index ["slug"], name: "index_practices_on_slug", unique: true
  end

end
