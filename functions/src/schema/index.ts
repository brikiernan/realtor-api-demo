import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList
} from 'graphql';

const CentroidType = new GraphQLObjectType({
  name: 'Centroid',
  fields: () => ({
    lat: { type: GraphQLFloat },
    lon: { type: GraphQLFloat }
  })
});

const AutocompleteType = new GraphQLObjectType({
  name: 'Autocomplete',
  fields: () => ({
    area_type: { type: GraphQLString },
    _id: { type: GraphQLID },
    _score: { type: GraphQLFloat },
    mpr_id: { type: GraphQLID },
    full_address: { type: new GraphQLList(GraphQLString) },
    line: { type: GraphQLString },
    city: { type: GraphQLString },
    postal_code: { type: GraphQLString },
    state_code: { type: GraphQLString },
    country: { type: GraphQLString },
    centroid: { type: CentroidType },
    prop_status: { type: new GraphQLList(GraphQLString) },
    validation_code: { type: new GraphQLList(GraphQLString) }
  })
});

const LocationType = new GraphQLObjectType({
  name: 'Location',
  fields: () => ({
    city_slug_id: { type: GraphQLString },
    postal_code: { type: GraphQLString },
    state: { type: GraphQLString },
    county: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString }
  })
});

const RangeType = new GraphQLObjectType({
  name: 'Range',
  fields: () => ({
    low: { type: GraphQLString },
    high: { type: GraphQLString }
  })
});

const GradesType = new GraphQLObjectType({
  name: 'Grades',
  fields: () => ({
    range: { type: RangeType }
  })
});

const RatingsType = new GraphQLObjectType({
  name: 'Ratings',
  fields: () => ({
    great_schools_rating: { type: GraphQLInt },
    parent_rating: { type: GraphQLInt }
  })
});

const SchoolsType = new GraphQLObjectType({
  name: 'Schools',
  fields: () => ({
    nces_id: { type: GraphQLID },
    id: { type: GraphQLID },
    greatschools_id: { type: GraphQLID },
    name: { type: GraphQLString },
    education_levels: { type: new GraphQLList(GraphQLString) },
    funding_type: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lon: { type: GraphQLFloat },
    student_count: { type: GraphQLInt },
    student_teacher_ratio: { type: GraphQLFloat },
    location: { type: LocationType },
    phone: { type: GraphQLString },
    distance_in_miles: { type: GraphQLFloat },
    grades: { type: GradesType },
    relevance: { type: GraphQLString },
    ratings: { type: RatingsType }
  })
});

const BrandingSubDetailsType = new GraphQLObjectType({
  name: 'BrandingSubDetails',
  fields: () => ({
    name: { type: GraphQLString },
    photo: { type: GraphQLString },
    phone: { type: GraphQLString },
    slogan: { type: GraphQLString },
    show_realtor_logo: { type: GraphQLBoolean },
    link: { type: GraphQLString },
    accent_color: { type: GraphQLString }
  })
});

const BrandingSubType = new GraphQLObjectType({
  name: 'BrandingSub',
  fields: () => ({
    photo_attribution: { type: BrandingSubDetailsType },
    details: { type: BrandingSubDetailsType }
  })
});

const BrandingType = new GraphQLObjectType({
  name: 'Branding',
  fields: () => ({
    listing_agent: { type: BrandingSubType },
    listing_office: { type: BrandingSubType },
    team_name: { type: GraphQLString }
  })
});

const DetailType = new GraphQLObjectType({
  name: 'Detail',
  fields: () => ({
    property_id: { type: GraphQLString },
    prop_status: { type: GraphQLString },
    prop_type: { type: GraphQLString },
    suppression_flags: { type: new GraphQLList(GraphQLString) },
    list_date: { type: GraphQLString },
    last_update: { type: GraphQLString },
    year_built: { type: GraphQLInt },
    listing_status: { type: GraphQLString },
    beds: { type: GraphQLInt },
    description: { type: GraphQLString },
    baths_full: { type: GraphQLInt },
    baths_half: { type: GraphQLInt },
    stories: { type: GraphQLInt },
    schools: { type: new GraphQLList(SchoolsType) },
    garage: { type: GraphQLString },
    heating: { type: GraphQLString },
    cooling: { type: GraphQLString },
    pool: { type: GraphQLBoolean },
    style: { type: GraphQLString },
    feature_tags: { type: new GraphQLList(GraphQLString) },
    branding: { type: BrandingType },
    address: {
      city: { type: GraphQLString },
      line: { type: GraphQLString },
      unit_value: { type: GraphQLString },
      street_direction: { type: GraphQLString },
      street_post_direction: { type: GraphQLString },
      postal_code: { type: GraphQLString },
      address_validation_code: { type: GraphQLString },
      state_code: { type: GraphQLString },
      state: { type: GraphQLString },
      county: { type: GraphQLString },
      fips_code: { type: GraphQLString },
      time_zone: { type: GraphQLString },
      lat: { type: GraphQLFloat },
      lon: { type: GraphQLFloat }
    },
    features: [
      {
        category: { type: GraphQLString },
        parent_category: { type: GraphQLString },
        text: { type: new GraphQLList(GraphQLString) }
      }
    ],
    mls: {
      name: { type: GraphQLString },
      id: { type: GraphQLString },
      plan_id: { type: GraphQLString },
      abbreviation: { type: GraphQLString },
      type: { type: GraphQLString },
      disclaimer: {
        photo: { type: GraphQLString },
        href: { type: GraphQLString },
        text: { type: GraphQLString }
      }
    },
    matterports: [
      {
        id: { type: GraphQLID },
        url: { type: GraphQLString },
        thumb_url: { type: GraphQLString }
      }
    ],
    virtual_tour: {
      href: { type: GraphQLString }
    },
    client_display_flags: {
      presentation_status: { type: GraphQLString },
      is_showcase: { type: GraphQLBoolean },
      lead_form_phone_required: { type: GraphQLBoolean },
      price_change: { type: GraphQLInt },
      is_co_broke_email: { type: GraphQLBoolean },
      has_open_house: { type: GraphQLBoolean },
      is_foreclosure: { type: GraphQLBoolean },
      is_short_sale: { type: GraphQLBoolean },
      is_co_broke_phone: { type: GraphQLBoolean },
      is_new_listing: { type: GraphQLBoolean },
      is_new_plan: { type: GraphQLBoolean },
      is_new_construction: { type: GraphQLBoolean },
      is_turbo: { type: GraphQLBoolean },
      is_office_standard_listing: { type: GraphQLBoolean },
      suppress_map_pin: { type: GraphQLBoolean },
      is_contingent: { type: GraphQLBoolean },
      show_contact_a_lender_in_lead_form: { type: GraphQLBoolean },
      show_veterans_united_in_lead_form: { type: GraphQLBoolean },
      is_showcase_choice_enabled: { type: GraphQLBoolean }
    },
    tax_history: [
      {
        assessment: {
          building: { type: GraphQLInt },
          land: { type: GraphQLInt },
          total: { type: GraphQLInt }
        },
        tax: { type: GraphQLInt },
        year: { type: GraphQLString }
      }
    ],
    sold_history: [
      {
        date: { type: GraphQLString },
        source: { type: GraphQLString },
        listing: {
          price: { type: GraphQLInt }
        }
      }
    ],
    property_history: [
      {
        event_name: { type: GraphQLString },
        date: { type: GraphQLString },
        price: { type: GraphQLInt },
        price_changed: { type: GraphQLInt },
        sqft: { type: GraphQLInt },
        datasource_name: { type: GraphQLString },
        source: { type: GraphQLString }
      }
    ],
    public_records: [
      {
        baths: { type: GraphQLInt },
        baths_half: { type: GraphQLInt },
        baths_full: { type: GraphQLInt },
        baths_3qtr: { type: GraphQLInt },
        baths_1qtr: { type: GraphQLInt },
        beds: { type: GraphQLInt },
        construction: { type: GraphQLString },
        cooling: { type: GraphQLString },
        cl_id: { type: GraphQLID },
        date_updated: { type: GraphQLString },
        distinct_baths: { type: GraphQLInt },
        exterior1: { type: GraphQLString },
        fireplace: { type: GraphQLString },
        garage: { type: GraphQLString },
        garage_spaces: { type: GraphQLInt },
        heating: { type: GraphQLString },
        lot_size: { type: GraphQLInt },
        pool: { type: GraphQLString },
        prop_type: { type: GraphQLString },
        roofing: { type: GraphQLString },
        rooms: { type: GraphQLInt },
        sqft: { type: GraphQLInt },
        stories: { type: GraphQLInt },
        style: { type: new GraphQLList(GraphQLString) },
        units: { type: GraphQLInt },
        year_built: { type: GraphQLInt },
        year_renovated: { type: GraphQLInt },
        view: { type: GraphQLString }
      }
    ],
    office: {
      id: { type: GraphQLString },
      phones: { type: new GraphQLList(GraphQLString) }
    },
    agents: [
      {
        primary: { type: GraphQLBoolean }
      }
    ],
    lot_size: {
      size: { type: GraphQLInt },
      units: { type: GraphQLString }
    },
    building_size: {
      size: { type: GraphQLInt },
      units: { type: GraphQLString }
    },
    price: { type: GraphQLInt },
    rdc_web_url: { type: GraphQLString },
    rdc_app_url: { type: GraphQLString },
    homevalue_web_url: { type: GraphQLString },
    baths: { type: GraphQLInt },
    photo_count: { type: GraphQLInt },
    data_source_name: { type: GraphQLString },
    detail_tracking: { type: GraphQLString },
    photos: [
      {
        description: { type: GraphQLString },
        href: { type: GraphQLString },
        tags: { type: new GraphQLList(GraphQLString) }
      }
    ]
  })
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    autocomplete: {
      type: new GraphQLList(AutocompleteType),
      args: { input: { type: GraphQLString } },
      async resolve(_, { input }) {
        const { getAddresses } = await import('../resolvers');
        return await getAddresses(input);
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query: RootQueryType
});
